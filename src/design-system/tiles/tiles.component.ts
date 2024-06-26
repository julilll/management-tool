import { ChangeDetectionStrategy, Component, input, computed, inject, output } from '@angular/core';
import { Item } from '../../shared/item-models.interface';
import { TablePaginatorComponent } from '../table/paginator/table-pagination.component';
import { TileCardComponent } from './tile-card/tile-card.component';

export interface Table {
  items: Item[];
}

@Component({
  selector: 'app-tiles',
  templateUrl: 'tiles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TablePaginatorComponent, TileCardComponent],
  standalone: true
})
export class TilesComponent {
  public items = input.required<Table['items']>();
  public updateItem = output<Item>();
}
