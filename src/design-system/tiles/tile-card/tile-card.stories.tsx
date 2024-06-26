import type { Meta, StoryObj } from '@storybook/angular';
import { TileCardComponent } from './tile-card.component';
import { itemsBatch } from '../../../shared/utils-sb';

const meta: Meta<TileCardComponent> = {
  title: 'Design System/Tiles/Tile card',
  component: TileCardComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TileCardComponent>;

export const Variant: Story = {
  args: {
    item: itemsBatch[0],
  },
};

