import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from 'ui';
import MyCart from '../carts/MyCart';
import Home from '../Home';
import AllProduct from '../products/AllProduct';
import NewProduct from '../products/NewProduct';
import ProductDetail from '../products/ProductDetail';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<AllProduct />} />
        <Route path="/product/new" element={<NewProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<MyCart />} />
        <Route path="/*" element={<NotFound link="/" linkText="HOME으로 이동" />} />
      </Routes>
    </BrowserRouter>
  );
}
