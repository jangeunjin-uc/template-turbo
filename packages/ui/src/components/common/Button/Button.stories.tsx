import type { Meta, StoryObj } from '@storybook/react';
import { Bell } from '@phosphor-icons/react';
import Button, { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: '@ui/components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps>;

const argTypes = {
  className: {
    control: 'text',
  },
  label: {
    control: 'text',
  },
  variant: {
    options: ['textOnly', 'iconOnly', 'textIcon'],
    control: { type: 'radio' },
  },
  buttonStyleType: {
    options: ['contained', 'outline', 'ghost'],
    control: { type: 'radio' },
  },
  buttonColor: {
    options: ['primary', 'secondary', 'blue'],
    control: { type: 'radio' },
  },
  buttonSize: {
    options: ['full', 'large', 'medium', 'small'],
    control: { type: 'radio' },
  },
  icon: {
    control: false,
  },
  textIconPosition: {
    options: ['left', 'right'],
    control: { type: 'radio' },
  },
};

export const ButtonStyle: Story = {
  args: {
    label: 'Label',
    variant: 'textIcon',
    buttonStyleType: 'contained',
    textIconPosition: 'left',
    buttonColor: 'primary',
  },
  argTypes,
  render: (args) => <Button {...args} icon={<Bell size={20} />} label="label" />,
};
