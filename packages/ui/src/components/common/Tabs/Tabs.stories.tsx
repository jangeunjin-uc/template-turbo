import type { Meta, StoryObj } from '@storybook/react';
import TabPanel from './TabPanel';
import Tabs, { TabsProps } from '.';

const meta: Meta = {
  title: '@ui/components/common/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<TabsProps>;

const argTypes = {
  tabs: [
    {
      id: {
        control: false,
      },
      label: {
        control: 'text',
      },
    },
  ],
  tabContent: [
    {
      control: 'object',
    },
  ],
};

export const Basic: Story = {
  args: {
    tabs: [
      { id: 'tab-id-0', label: 'tab 01' },
      { id: 'tab-id-1', label: 'tab 02' },
      { id: 'tab-id-2', label: 'tab 03' },
    ],
    tabContent: [
      <TabPanel>tab contents1</TabPanel>,
      <TabPanel>tab contents2</TabPanel>,
      <TabPanel>tab contents3</TabPanel>,
    ],
    className: 'basic',
  },
  argTypes,
  render: (args) => <Tabs {...args} />,
};
