import { CaretRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function SlideBanner() {
  const swiperConfig = {
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 25000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="banner-swiper-container">
      <Swiper className="swiper" modules={[Autoplay, Pagination, Navigation]} {...swiperConfig}>
        <SwiperSlide className="banner-slide swiper-slide">
          <span className="image-wrapper">
            <img src="src/assets/image/bg/bg_main_banner.jpg" alt="banner" />
          </span>
          <div className="banner-title-container">
            <div className="banner-title">
              <strong>2024 S/S Collection</strong>
              <Link to="/event">
                <span>Detail</span>
                <CaretRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner-slide swiper-slide">
          <span className="image-wrapper">
            <img src="src/assets/image/bg/bg_main_banner_02.jpg" alt="banner" />
          </span>

          <div className="banner-title-container">
            <div className="banner-title">
              <strong>S/S Campaign</strong>
              <Link to="/event">
                <span>Detail</span>
                <CaretRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
