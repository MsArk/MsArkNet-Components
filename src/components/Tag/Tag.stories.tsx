import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '../../context/ThemeContext';
import Tag from './Tag';
import Search from '../../icons/Search/Search';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    value: { control: 'text' },
    severity: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'danger', 'contrast'],
    },
    rounded: { control: 'boolean' },
    iconPosition: {
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
    unstyled: { control: 'boolean' },
  },
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => (
  <Tag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 'Default tag',
};

export const Primary = Template.bind({});
Primary.args = {
  value: 'Primary',
  severity: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'Secondary',
  severity: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  value: 'Success',
  severity: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  value: 'Warning',
  severity: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  value: 'Info',
  severity: 'info',
};

export const Danger = Template.bind({});
Danger.args = {
  value: 'Danger',
  severity: 'danger',
};

export const Contrast = Template.bind({});
Contrast.args = {
  value: 'Contrast',
  severity: 'contrast',
};

export const Rounded = Template.bind({});
Rounded.args = {
  value: 'Rounded',
  rounded: true,
};

export const IconPosition = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Tag
      value='Left Icon'
      severity='primary'
      icon={
        <Search
          color='#fff'
          height={24}
        />
      }
      iconPosition='left'
    />

    <Tag
      value='Right Icon'
      rounded={true}
      icon={
        <Search
          color='#000'
          height={24}
        />
      }
      iconPosition='right'
    />
  </div>
);
