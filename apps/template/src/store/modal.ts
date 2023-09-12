import { ReactNode } from 'react';
import { SizeType } from 'ui/src/types/constants';
import { SliceType } from '.';

interface State {
  isModalShow: boolean;
  modalItem: {
    id: string;
    className?: string;
    content: ReactNode;
    size?: SizeType;
  }[];
}

interface Action {
  modalShow: (payload: {
    id: string;
    className?: string;
    content: ReactNode;
    size?: SizeType;
  }) => void;
  modalHide: (id: string) => void;
}

export type ModalSliceType = State & Action;

const initialState: State = { isModalShow: false, modalItem: [] };

export const modalSlice: SliceType<ModalSliceType> = (set) => ({
  ...initialState,
  modalShow: (payload) =>
    set(({ modal }) => {
      modal.isModalShow = true;
      modal.modalItem = [...modal.modalItem, payload];
    }),
  modalHide: (id) =>
    set(({ modal }) => {
      modal.modalItem = modal.modalItem.filter(({ id: modalId }: { id: string }) => modalId !== id);

      if (modal.modalItem.length === 0) {
        modal.isModalShow = false;
      }
    }),
});
