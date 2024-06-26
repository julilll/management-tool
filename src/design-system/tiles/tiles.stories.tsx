import type { Meta, StoryObj } from '@storybook/angular';
import { TilesComponent } from './tiles.component';
import { itemsBatch as items } from '../../shared/utils-sb';

const meta: Meta<TilesComponent> = {
  title: 'Design System/Tiles',
  component: TilesComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TilesComponent>;

export const Variant: Story = {
  args: { items },
};

