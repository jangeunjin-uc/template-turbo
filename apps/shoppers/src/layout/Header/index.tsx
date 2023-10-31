import { SignIn, SignOut } from '@phosphor-icons/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'ui';
import { shallow } from 'zustand/shallow';
import useOathSignIn, { useAuthStateChange } from '@shoppers/hook/useOauthSignIn';
import { store } from '@shoppers/store';

export default function Header() {
  const [isLogin, userInfo, setInfo] = store(
    ({ users }) => [users.isLogin, users.userInfo, users.setInfo],
    shallow,
  );
  const handleClickSignIn = () => {
    useOathSignIn();
  };

  useEffect(() => {
    useAuthStateChange(setInfo);
  }, [isLogin]);

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">
          <span className="hidden">logo</span>
          <strong className="title">SCO</strong>
          <span className="image-wrapper">
            <img src="/src/assets/image/icon/logo.svg" alt="logo" />
          </span>
        </Link>
      </h1>
      <div className="header-rnb">
        <nav>
          <Link to="/product" className="rnb--link">
            <strong>Product</strong>
          </Link>
          <Link to="/product/new" className="rnb--link">
            <strong>New Arrival</strong>
          </Link>
          <Link to="/carts" className="rnb--link">
            <strong>My Cart</strong>
          </Link>
          <div className="rnb-login">
            {isLogin && (
              <>
                {userInfo.map((user) => (
                  <div className="rnb-profile" key={user.id}>
                    <a className="profile-avatar" href="/">
                      <img src={user.photoUrl} alt="프로필" referrerPolicy="no-referrer" />
                      <span className="hidden">프로필영역</span>
                    </a>
                  </div>
                ))}
              </>
            )}
            <Button
              className="btn-rnb-login"
              label={isLogin ? 'SignOut' : 'SignIn'}
              variant="textIcon"
              textIconPosition="right"
              icon={isLogin ? <SignOut /> : <SignIn />}
              onClick={handleClickSignIn}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
