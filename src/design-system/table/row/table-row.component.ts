import { ChangeDetectionStrategy, Component, ViewChild, computed, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Item } from '../../../shared/item-models.interface';
import { ColorBoxDirective } from '../../color-box/color-box.directive';

export interface TableRow {
  item: Item;
}

@Component({
  selector: 'app-table-row',
  templateUrl: 'table-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, ColorBoxDirective],
  standalone: true
})
export class TableRowComponent {
  public item = input.required<TableRow['item']>();
}
