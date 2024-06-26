import { StoryFn, moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { ColorBoxDirective } from './color-box.directive';

type Story = StoryObj<ColorBoxDirective>;

const meta: Meta<ColorBoxDirective> = {
  title: 'Design System/Color box',
  decorators: [
    moduleMetadata({
      imports: [ColorBoxDirective],
    }),
  ],  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number'
    }
  }
};

const Template: StoryFn = (args: Story) => ({
  props: args,
  template: `<div [appColorBox] [color]="color" [size]="size"></div>`,
});

export default meta;

export const Variant = Template.bind({});
Variant.args = {
  color: '#1da1f2',
  size: 32,
};
