import './Carousel.css';
import { carouselImages } from "./carouselData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = () => {

    return < Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper3"
        >
          {carouselImages?.map((carouselImage) => {
            return <SwiperSlide key={carouselImage.index}>
              <img src={carouselImage.img} alt="image" />
            </SwiperSlide>
          })}
        </Swiper>
        
}

export default Carousel;


