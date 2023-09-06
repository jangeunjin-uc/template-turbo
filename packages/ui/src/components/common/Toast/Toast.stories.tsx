import type { Meta, StoryObj } from '@storybook/react';
import ToastItem, { ToastItemProps } from './ToastItem';

const meta: Meta<ToastItemProps> = {
  title: '@ui/components/Toast',
  component: ToastItem,
};

export default meta;

type Story = StoryObj<ToastItemProps>;

const argTypes = {
  id: {
    control: false,
  },
  title: {
    control: 'text',
  },
  actions: {
    label: {
      control: false,
    },
    actions: {
      control: false,
    },
  },
};

export const Toast: Story = {
  args: {
    id: 'toast-id',
    title: '기본 toast 안내 문구가 들어갑니다. /// text만 있는 경우 !',
    actions: undefined,
  },
  argTypes,
  render: (args) => (
    <div className="toast-wrap">
      <ToastItem {...args} />
    </div>
  ),
};

export const ToastWithAction: Story = {
  args: {
    id: 'toast-with-action-id',
    title: '기본 toast 안내 문구가 들어갑니다.',
    actions: {
      label: '링크 명',
      action: () => {},
    },
  },
  argTypes: {
    ...argTypes,
    actions: {
      label: { control: 'text' },
      action: { control: false },
    },
  },
  render: (args) => (
    <div className="toast-wrap">
      <ToastItem {...args} />
    </div>
  ),
};
