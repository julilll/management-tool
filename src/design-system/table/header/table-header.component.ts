import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { patchState } from '@ngrx/signals';
import { ItemsStore } from '../../../shared/items.store';

@Component({
  selector: 'app-table-header',
  template: `
    <div class="flex flex-row gap-2 w-full font-extralight px-5">
      <p class="basis-2/12">Color</p>
      <p class="basis-full cursor-pointer" (click)="changeOrder()">{{_sort() === 'asc' ? '&#8595;' : '&#8593;'}} Name</p>
      <p class="basis-3/12">Create Date</p>
      <p class="basis-3/12">Last Update</p>
      <p class="basis-3/12">Created By</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  standalone: true
})
export class TableHeaderComponent {
  readonly store = inject(ItemsStore);

  public readonly _sort = computed(() => this.store.sort());

  changeOrder(): void {
    patchState(this.store, { sort: this._sort() === 'asc' ? 'des' : 'asc'})
  }
}
