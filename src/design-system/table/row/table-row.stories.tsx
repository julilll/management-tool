import type { Meta, StoryObj } from '@storybook/angular';
import { TableRowComponent } from './table-row.component';
import { itemsBatch } from '../../../shared/utils-sb';

const meta: Meta<TableRowComponent> = {
  title: 'Design System/Table/Row',
  component: TableRowComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TableRowComponent>;

export const Variant: Story = {
  args: {
    item: itemsBatch[0],
  },
};

