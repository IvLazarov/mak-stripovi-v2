import { Link } from 'react-router';
import BackToHome from '../BackToHome/BackToHome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Events.css';

const Events = () => {

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    return <div className='event-container'>
        <h1>Настани</h1>
        <div className="description">
            <p>
            Низ годините сме организирале и учествувале на многу културни настани. Подолу
            можете да ги разгледате сликите и да се вратите во времето низ галериите.
            </p>
            
        </div>
        <h1>Промоција на Синдром #1 04.03.2010</h1>
        <div className='photos'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-1.jpg" alt="promocija" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-2.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-3.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-4.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-5.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-6.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-7.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-8.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-9.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-10.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/promocija-na-sindrom-1/04032010-promocija-na-sindrom-11.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
        </div>
        <h1>Промоција на Синдром #2 26.05.2010</h1>
        <div className="photos">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26-05-2010-Sindrom-2-2_resize.jpg" alt="promocija2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26.05.2010-Sindrom-2-3_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26.05.2010-Sindrom-2-4_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26.05.2010-Sindrom-2-5_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26.05.2010-Sindrom-2-6_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26.05.2010-Sindrom-2-8_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/26.05.2010-Sindrom-2/www/26.05.2010-Sindrom-2-9_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
        </div>
        <h1>Промоција на Синдром #3 29.09.2010</h1>
        <div className="photos">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4506.jpg" alt="promocija2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4508_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4509_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4511_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4512_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4513_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4514_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/29.09.2010-sindrom-3/DSC_4516_resize.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
        </div>
        <h1>Хуманитарен концерт 06.08.2010</h1>
        <div className="photos">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08661.JPG" alt="koncert" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08662.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08663.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08664.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08665.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08666.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08667.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08668.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08669.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08670.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08671.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08672.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08673.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08674.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08675.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08676.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08678.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08679.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08680.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08681.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08682.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08683.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08684.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08685.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08686.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08687.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08688.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08689.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08690.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08691.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08692.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08693.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08694.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08695.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08696.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08697.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08698.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08699.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08701.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08702.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08703.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08704.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08705.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08706.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08707.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08708.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08709.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08710.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08711.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08712.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08713.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08714.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08715.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08716.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08717.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08718.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08719.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../nastani/2010-06-08-Humantaren-Koncert/DSC08720.JPG" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
        </div>
        <div className="member-links">
            <BackToHome />
            <Link onClick={scrollToTop}>Лифт до горе</Link>
            </div>
    </div>
}

export default Events;