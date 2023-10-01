import { Link } from 'react-router-dom';

export default function Header() {
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
        </nav>
      </div>
    </header>
  );
}
