import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import { store } from '@shoppers/store';
import { firebaseAuth } from '../../firebase.config';

const useSignIn = () => {
  const googleProvider = new GoogleAuthProvider();

  const {
    toast: { toastShow },
    users: { setInfo },
  } = store.getState();

  signInWithPopup(firebaseAuth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const { user } = result;

      const userInfo = JSON.stringify({
        email: user.email,
        name: user.displayName,
        photoUrl: user.photoURL,
        providerId: user.providerId,
        creationTime: user.metadata.creationTime,
        lastSiginTime: user.metadata.lastSignInTime,
        token,
      });

      localStorage.setItem('shoppers_user_info', userInfo);
      setInfo({
        email: user.email || '',
        name: user.displayName || '',
        photoUrl: user.photoURL || '',
        providerId: user.providerId,
        creationTime: user.metadata.creationTime || '',
        lastSiginTime: user.metadata.lastSignInTime || '',
        token: token || '',
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

const useSignOut = () => {};

const useOathSignIn = () => {
  const {
    users: { isLogin },
  } = store.getState();

  return isLogin ? useSignIn : useSignOut;
};

export default useOathSignIn;
