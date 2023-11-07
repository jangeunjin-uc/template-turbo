import { UserInfoType } from '@shoppers/types/user';
import { SliceType } from '.';

interface State {
  isLogin: boolean;
  userInfo: UserInfoType[];
}

interface Action {
  setInfo: (payload: UserInfoType) => void;
  delInfo: () => void;
}

export type UserSliceType = State & Action;

const initialState: State = { isLogin: false, userInfo: [] };

export const userSlice: SliceType<UserSliceType> = (set) => ({
  ...initialState,
  setInfo: (payload) =>
    set(({ users }) => {
      users.delInfo();
      users.isLogin = true;
      users.userInfo = [payload];
    }),
  delInfo: () => {
    set(({ users }) => {
      users.userInfo = [];

      if (users.userInfo.length === 0) {
        users.isLogin = false;
      }
    });
  },
});
