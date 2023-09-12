import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SIZE_TYPE } from '../../../types/constants';
import Button from '../Button';
import Alert from './Alert';
import Confirm from './Confirm';
import Modal, { ModalProps } from '.';

const meta: Meta<ModalProps> = {
  title: '@ui/components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<ModalProps>;

const argTypes = {
  modalItem: [
    {
      id: {
        control: false,
      },
      className: {
        control: 'text',
      },
      content: {
        control: 'object',
      },
      size: {
        option: ['full', 'large', 'medium', 'small'],
        control: { type: 'radio' },
      },
    },
  ],
};

export const CustomModal: Story = {
  args: {
    modalItem: [
      {
        id: 'modal-storybook-id',
        className: 'className',
        content: <span style={{ padding: '3rem 1.5rem' }}>modal 내용</span>,
        size: 'small',
      },
    ],
  },
  argTypes,
  render: (args) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
      <>
        <Button
          label="Click to open Custom Modal"
          variant="textOnly"
          buttonStyleType="contained"
          buttonColor="primary"
          buttonSize="medium"
          onClick={() => setVisible((prev) => !prev)}
        />
        {visible && <Modal {...args} />}
      </>
    );
  },
};

export const ConfirmModal: Story = {
  args: {
    modalItem: [
      {
        id: 'modal-confirm-storybook-id',
        className: 'className',
        content: (
          <Confirm onCancle={() => {}} onConfirm={() => {}}>
            <span>확인 또는 취소를 눌러주세요</span>
          </Confirm>
        ),
        size: SIZE_TYPE.SMALL,
      },
    ],
  },
  argTypes,
  render: (args) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
      <>
        <Button
          label="Click to Open Custom Modal"
          variant="textOnly"
          buttonStyleType="contained"
          buttonColor="secondary"
          onClick={() => setVisible((prev) => !prev)}
        />
        {visible && <Modal {...args} />}
      </>
    );
  },
};

export const AlertModal: Story = {
  args: {
    modalItem: [
      {
        id: 'modal-confirm-storybook-id',
        className: 'className',
        content: (
          <Alert onClose={() => {}}>
            <span>단순 경고문 또는 안내메시지</span>
          </Alert>
        ),
        size: SIZE_TYPE.SMALL,
      },
    ],
  },
  argTypes,
  render: (args) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
      <>
        <Button
          label="Click to Alert Modal Open"
          variant="textOnly"
          buttonStyleType="contained"
          buttonColor="blue"
          onClick={() => setVisible((prev) => !prev)}
        />
        {visible && <Modal {...args} />}
      </>
    );
  },
};
