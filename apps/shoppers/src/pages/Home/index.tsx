import SlideBanner from '@shoppers/components/SlideBanner';
import LayoutWithHeader from '@shoppers/layout/LayoutWithHeader';

export default function Home() {
  return (
    <LayoutWithHeader className="home">
      <div className="section-banner section">
        <SlideBanner />
      </div>
      <div className="section-highlights section">{/* 하이라이트 */}</div>
    </LayoutWithHeader>
  );
}
