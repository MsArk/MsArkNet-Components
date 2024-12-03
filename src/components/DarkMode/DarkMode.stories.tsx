import { Meta, StoryFn } from '@storybook/react';
import { ThemeProvider } from '../../context/ThemeContext';
import DarkeMode from './DarkMode';
import Tag from '../Tag/Tag';

export default {
  title: 'Components/DarkeMode',
  component: DarkeMode,
} as Meta;

const Template: StoryFn = () => (
  <ThemeProvider>
    <div>
      <DarkeMode />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Tag value='Primary' severity='primary' rounded={true} />
        <Tag value='Secondary' severity='secondary' rounded={true} />
        <Tag value='Success' severity='success' rounded={true} />
        <Tag value='Warning' severity='warning' rounded={true} />
        <Tag value='Info' severity='info' rounded={true} />
        <Tag value='Danger' severity='danger' rounded={true} />
        <Tag value='Contrast' severity='contrast' rounded={true} />
      </div>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
