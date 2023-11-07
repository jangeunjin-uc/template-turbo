import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from '@firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { store } from '@shoppers/store';
import { UserInfoType, emptyUsersInfo } from '@shoppers/types/user';
import { firebaseAuth } from '../../firebase.config';

const useSignIn = async () => {
  const googleProvider = new GoogleAuthProvider();

  const {
    toast: { toastShow },
    users: { setInfo },
  } = store.getState();

  await signInWithPopup(firebaseAuth, googleProvider)
    .then((result) => {
      const { user } = result;

      setInfo({
        id: uuidv4(),
        email: user.email || '',
        name: user.displayName || '',
        photoUrl: user.photoURL || '',
        providerId: user.providerId,
        creationTime: user.metadata.creationTime || '',
        lastSiginTime: user.metadata.lastSignInTime || '',
      });
      toastShow({ id: `toast-login--success-${uuidv4()}`, title: '성공적으로 로그인되었습니다.' });
    })
    .catch((error) => {
      const erroCode = error.code;
      const errorMessage = error.message;

      console.log(erroCode, errorMessage);
      toastShow({ id: `toast-login--fail-${uuidv4()}`, title: '로그인 실패! 다시 확인하세요' });
    });
};

const useSignOut = async () => {
  const auth = getAuth();
  const {
    toast: { toastShow },
    users: { delInfo },
  } = store.getState();

  await signOut(auth)
    .then(() => {
      delInfo();
      toastShow({ id: `toast-login--fail-${uuidv4()}`, title: '로그아웃되었습니다.' });
    })
    .catch((e) => {
      console.log(e);
      toastShow({
        id: `toast-login--fail-${uuidv4()}`,
        title: `로그아웃 실패! 다시 확인하세요 : ${e.message}`,
      });
    });
};

const useOathSignIn = () => {
  const {
    users: { isLogin },
  } = store.getState();

  return !isLogin ? useSignIn() : useSignOut();
};

export const useAuthStateChange = async (setUserInfo: (user: UserInfoType) => void) => {
  const auth = getAuth();
  const {
    users: { delInfo },
  } = store.getState();

  return onAuthStateChanged(auth, (user) => {
    if (user) {
      return setUserInfo({
        id: user.uid,
        email: user.email || '',
        name: user.displayName || '',
        photoUrl: user.photoURL || '',
        providerId: user.providerId,
        creationTime: user.metadata.creationTime || '',
        lastSiginTime: user.metadata.lastSignInTime || '',
      });
    }

    delInfo();
    setUserInfo(emptyUsersInfo);
  });
};

export default useOathSignIn;
