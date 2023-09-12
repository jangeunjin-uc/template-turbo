import { SliceType } from '.';

interface State {
  isDark: boolean;
}

interface Action {
  toggleDarkMode: (payload: { isDark: boolean }) => void;
}

export type DarkModeSliceType = State & Action;

const initialState: State = { isDark: false };

export const darkModeSlice: SliceType<DarkModeSliceType> = (set) => ({
  ...initialState,
  toggleDarkMode: (payload) =>
    set(({ darkMode }) => {
      darkMode.isDark = payload.isDark;

      if (payload.isDark) {
        document.body.dataset.darkMode = 'dark';
      } else {
        document.body.dataset.darkMode = 'light';
      }
    }),
});
