import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DarkModeSliceType, darkModeSlice } from './darkmode';
import { ModalSliceType, modalSlice } from './modal';
import { ToastSliceType, toastSlice } from './toast';
import { UserSliceType, userSlice } from './users';

interface StoreType {
  modal: ModalSliceType;
  toast: ToastSliceType;
  darkMode: DarkModeSliceType;
  users: UserSliceType;
}

type MiddleWareType = [['zustand/devtools', never], ['zustand/immer', never]];

export type SliceType<T> = StateCreator<StoreType, MiddleWareType, [], T>;

export const store = create<StoreType>()(
  devtools(
    immer((...args) => ({
      modal: modalSlice(...args),
      toast: toastSlice(...args),
      darkMode: darkModeSlice(...args),
      users: userSlice(...args),
    })),
  ),
);
