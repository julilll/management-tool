import type { Meta, StoryObj } from '@storybook/angular';
import { InputFieldComponent } from './input-field.component';
import { ICONS } from '../icon/icon.interface';

const meta: Meta<InputFieldComponent> = {
  title: 'Design System/Input field',
  component: InputFieldComponent,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
    prefix: {
      control: 'inline-radio',
      options: ICONS
    }
  }
};

export default meta;
type Story = StoryObj<InputFieldComponent>;

export const Variant: Story = {};

export const VariantWithIcon: Story = {
  args: {
    prefix: 'search',
  },
};
