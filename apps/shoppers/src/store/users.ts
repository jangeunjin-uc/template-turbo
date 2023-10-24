import { SliceType } from '.';

interface State {
  isLogin: boolean;
  userInfo: {
    email: string;
    name: string;
    photoUrl: string;
    providerId: string;
    creationTime: string;
    lastSiginTime: string;
    token: string;
  }[];
}

interface Action {
  setInfo: (payload: {
    email: string;
    name: string;
    photoUrl: string;
    providerId: string;
    creationTime: string;
    lastSiginTime: string;
    token: string;
  }) => void;
  delInfo: (email: string) => void;
}

export type UserSliceType = State & Action;

const initialState: State = { isLogin: false, userInfo: [] };

export const userSlice: SliceType<UserSliceType> = (set) => ({
  ...initialState,
  setInfo: (payload) =>
    set(({ users }) => {
      users.isLogin = true;
      users.userInfo = [...users.userInfo, payload];
    }),
  delInfo: (payload) => {
    set(({ users }) => {
      users.userInfo.filter(({ email }) => email === payload);

      if (users.userInfo.length === 0) {
        users.isLogin = false;
      }
    });
  },
});
