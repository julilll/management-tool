import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { patchState } from '@ngrx/signals';
import { IconComponent } from '../../icon/icon.component';
import { ItemsStore } from '../../../shared/items.store';

@Component({
  selector: 'app-table-paginator',
  templateUrl: 'table-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  standalone: true
})
export class TablePaginatorComponent {
  readonly store = inject(ItemsStore);

  public readonly _currentPage = computed(() => this.store.currentPage());
  public readonly _itemsPerPage = computed(() => this.store.itemsPerPage());

  protected totalPages = computed(() => Math.ceil(this.store.items().length / this._itemsPerPage()) - 1)

  protected changed(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    patchState(this.store, { itemsPerPage: +selectElement?.value })
  }
  protected nextPage(): void {
    patchState(this.store, { currentPage: this._currentPage() + 1 })
  }

  protected previousPage(): void {
    patchState(this.store, { currentPage: this._currentPage() - 1 })
  }

  protected toTheStart(): void {
    patchState(this.store, { currentPage: 0 })
  }

  protected toTheEnd(): void {
    patchState(this.store, { currentPage: this.totalPages() })
  }
}
