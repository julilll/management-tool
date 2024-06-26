import { Component, OnInit, Signal, ViewChild, computed, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from '../../../design-system/table/table.component';
import { ItemsStore } from '../../../shared/items.store';
import { AppTitleComponent } from '../../../design-system/title/title.component';
import { InputFieldComponent } from '../../../design-system/input-field/input-field.component';
import { patchState } from '@ngrx/signals';
import { IconComponent } from '../../../design-system/icon/icon.component';
import { NgClass } from '@angular/common';
import { TilesComponent } from '../../../design-system/tiles/tiles.component';
import { Item, ViewMode } from '../../../shared/item-models.interface';
import { ModalComponent } from '../../../design-system/modal/modal.component';

@Component({
  selector: 'management-tool-page',
  standalone: true,
  imports: [RouterOutlet, TableComponent, AppTitleComponent, InputFieldComponent, IconComponent, NgClass, TilesComponent, ModalComponent],
  providers: [ItemsStore],
  templateUrl: './management-tool.component.html'
})
export class ManagementToolComponent {
  @ViewChild(ModalComponent) modal!: ModalComponent;
  readonly store = inject(ItemsStore);
  public readonly _filter = computed(() => this.store.filter());
  public readonly _view = computed(() => this.store.view());

  constructor() {
    this.store.loadAll()
  }

  filterItems(event: string): void {
    patchState(this.store, { filter: event })
  }

  changeView(viewMode: ViewMode): void {
    patchState(this.store, { view: viewMode })
  }

  createItem() {
    this.modal.openModal();
  }

  updateItem(event: Item) {
    this.modal.openModal(event);
  }

  handleFormSubmit(values: any) {
    if (!values?.id) {
      this.store.addItem(values)
    } else {
      this.store.updateItem(values)
    }
  }
}
