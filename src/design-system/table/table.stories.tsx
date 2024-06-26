import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { itemsBatch as items } from '../../shared/utils-sb';

const meta: Meta<TableComponent> = {
  title: 'Design System/Table',
  component: TableComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TableComponent>;

export const Variant: Story = {
  args: { items },
};

