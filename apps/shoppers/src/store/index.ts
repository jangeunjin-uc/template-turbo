import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ModalSliceType, modalSlice } from './modal';

interface StoreType {
  modal: ModalSliceType;
}

type MiddleWareType = [['zustand/devtools', never], ['zustand/immer', never]];

export type SliceType<T> = StateCreator<StoreType, MiddleWareType, [], T>;

export const store = create<StoreType>()(
  devtools(
    immer((...args) => ({
      modal: modalSlice(...args),
    })),
  ),
);
