import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Item, ViewMode } from "./item-models.interface";
import { HttpService } from "../services/http.service";
import { computed, inject } from "@angular/core";

type ItemsState = {
  items: Item[];
  isLoading: boolean;
  error: string | null,
  currentPage: number;
  itemsPerPage: number,
  sort: 'asc' | 'des',
  filter: string,
  view: ViewMode
}

const initialState: ItemsState = {
  items: [],
  isLoading: false,
  error: null,
  currentPage: 0,
  itemsPerPage: 5,
  sort: 'asc',
  filter: '',
  view: 'list'
}

export const ItemsStore = signalStore(
  { providedIn: 'root'},
  withState(initialState),
  withComputed(({ items, filter, sort, currentPage, itemsPerPage }) => ({
    processedItems: computed(() => {
      return items().filter(el => el.name.toLowerCase().includes(filter().toLowerCase())).sort((a, b) => sort() === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).slice(currentPage() * itemsPerPage(), (currentPage() + 1) * itemsPerPage())
    }),
  })),
  withMethods((store, httpService = inject(HttpService)) => ({
    loadAll() {
      patchState(store, { isLoading: true });
      httpService.getItems().subscribe({
        next: (items) => {
          patchState(store, { items, isLoading: false });
        },
        error: (error) => patchState(store, { error, isLoading: false })
      })
    },
    addItem(item: Item) {
      patchState(store, { isLoading: true });
      const newItem: Item = { ...item, id: store.items().length.toString(), _cbu: 'John Smith', _doc: new Date().toString() };
      httpService.addItem(newItem).subscribe({
        next: () => {
          patchState(store, (state) => ({ items: state.items.concat(newItem), isLoading: false }));
        },
        error: (error) => patchState(store, { error, isLoading: false })
      })
    },
    updateItem(item: Item) {
      const newItem: Item = {...item, _dlu: new Date().toString() }
      patchState(store, { isLoading: true });
      httpService.updateItem(newItem).subscribe({
        next: () => {
          patchState(store, (state) => ({ items: state.items.map(i => item.id === i.id ? newItem : i), isLoading: false }));
        },
        error: (error) => patchState(store, { error, isLoading: false })
      })
    }
  }))
)
