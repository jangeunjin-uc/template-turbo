import { useParams } from 'react-router-dom';
import LayoutWithHeader from '@shoppers/layout/LayoutWithHeader';

export default function ProductDetail() {
  const { id } = useParams();

  return <LayoutWithHeader className="product-detail">product detail : {id}</LayoutWithHeader>;
}
