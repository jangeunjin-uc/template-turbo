import { SliceType } from '.';

interface State {
  isToastShow: boolean;
  toastItem: { id: string; title: string; actions?: { label: string; action: () => void } }[];
}

interface Action {
  toastShow: (payload: {
    id: string;
    title: string;
    actions?: { label: string; action: () => void };
  }) => void;
  toastHide: (id: string) => void;
}

export type ToastSliceType = State & Action;

const initialState: State = { isToastShow: false, toastItem: [] };

export const toastSlice: SliceType<ToastSliceType> = (set) => ({
  ...initialState,
  toastShow: (payload) =>
    set(({ toast }) => {
      toast.isToastShow = true;
      toast.toastItem = [...toast.toastItem, payload];
    }),
  toastHide: (id) =>
    set(({ toast }) => {
      toast.toastItem = toast.toastItem.filter(({ id: toastId }: { id: string }) => toastId !== id);

      if (toast.toastItem.length === 0) {
        toast.isToastShow = false;
      }
    }),
});
