import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Item } from '../../../shared/item-models.interface';
import { ColorBoxDirective } from '../../color-box/color-box.directive';

export interface TileCard {
  item: Item;
}

@Component({
  selector: 'app-tile-card',
  templateUrl: 'tile-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ColorBoxDirective],
  standalone: true,
  host: {
    '[style.display]': '"inline-block"'
  }})
export class TileCardComponent {
  public item = input.required<TileCard['item']>();
}
