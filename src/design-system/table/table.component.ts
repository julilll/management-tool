import { ChangeDetectionStrategy, Component, input, computed, inject, output } from '@angular/core';
import { TableHeaderComponent } from './header/table-header.component';
import { TableRowComponent } from './row/table-row.component';
import { TablePaginatorComponent } from './paginator/table-pagination.component';
import { Item } from '../../shared/item-models.interface';

export interface Table {
  items: Item[];
}

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TableHeaderComponent, TableRowComponent, TablePaginatorComponent],
  standalone: true
})
export class TableComponent {
  public items = input.required<Table['items']>();
  public updateItem = output<Item>();
}
