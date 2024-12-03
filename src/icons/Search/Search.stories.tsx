import { Meta, StoryFn } from '@storybook/react';
import Search from './Search';

export default {
  title: 'Icons/Search',
  component: Search,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['regular', 'light', 'solid'],
    },
    color: { control: 'color' },
    height: { control: { type: 'number', min: 10, max: 100 } },
    rotate: {
      control: {
        type: 'select',
      },
      options: [0, 45, 90, 135, 180, 225, 270, 315, 360],
    },
    loop: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'regular',
  color: '#000',
  height: 24,
};

export const Rotated = Template.bind({});
Rotated.args = {
  type: 'regular',
  color: '#000',
  height: 24,
  rotate: 45,
};

export const Spinning = Template.bind({});
Spinning.args = {
  type: 'regular',
  color: '#000',
  height: 24,
  rotate: 0,
  loop: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  type: 'invalid',
  color: '#ff0b0b',
  height: 60,
};
