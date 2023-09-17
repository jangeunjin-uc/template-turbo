import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SIZE_TYPE } from '../../../types/constants';
import CheckBox, { CheckBoxProps } from '.';

const meta: Meta<CheckBoxProps> = {
  title: '@ui/components/form/CheckBox',
  component: CheckBox,
};

export default meta;

type Story = StoryObj<CheckBoxProps>;

const argTypes = {
  id: {
    control: false,
  },
  labelPosition: {
    options: ['left', 'right'],
    control: { type: 'radio' },
  },
  label: {
    control: 'text',
  },
  checkboxSize: {
    options: [SIZE_TYPE.FULL, SIZE_TYPE.LARGE, SIZE_TYPE.MEDIUM, SIZE_TYPE.SMALL],
    control: { type: 'radio' },
  },
  checkboxColor: {
    options: ['primary', 'secondary', 'blue'],
    control: { type: 'radio' },
  },
  className: {
    control: false,
  },
  checked: {
    control: false,
  },
};

export const CheckboxStyle: Story = {
  args: {
    id: 'checkbox--1',
    labelPosition: 'right',
    label: <span>label</span>,
    checkboxSize: SIZE_TYPE.MEDIUM,
    checkboxColor: 'primary',
    checked: false,
  },
  argTypes,
  render: (arg) => {
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = () => setChecked((prev) => !prev);

    return <CheckBox {...arg} checked={checked} onChange={handleChange} />;
  },
};
