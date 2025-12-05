import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BackToHome from '../BackToHome/BackToHome';
import './comic.js';
import './StripTrip.css';
import comic from './comic.js';

const StripTrip = () => {

    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    return <div className='fest-container' >
        <h1>Стрип Трип</h1>
        <div className='fest-description'>
            <p>
            СтрипТрип е фестивал на стрипот кој за првпат се одржа на 7 јуни 2023 година. 
            На овој фестивал македонските стрип автори се дружат со автори од регионот, па и пошироко. 
            Фестивалот е проследен со галерии каде се истакнуваат младите и поискусните стрипски цртачи, 
            панел дискусии каде гостите го пренесуваат своето искуство, проекција на кратки филмови, како и 
            стрип берза каде можат да се најдат понови, но и постари стрипови. 
            Подолу можете да ги разгледате постерите од досегашните изданија, но и некои од стриповите од конкурсите, како и
            оние кои биле на промоција.
            </p>
            
        </div>
        <h1>Постери од фестивалот</h1>
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
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="../strip-trip/02-Print-Strip-Trip.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../strip-trip/B2-Poster-Strip-Trip-2024.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../strip-trip/A5-Strip-Trip-Programa-Predna.png" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
        </div>
        <h1>Објавени стрипови</h1>
        <h1>Семе од Иван Коминовски - 2025</h1>
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
        className="mySwiper"
      >
        {comic.pages.map((page, index) => {
            return <SwiperSlide key={index}>
                <img src={page} alt="comic-page" />
            </SwiperSlide>
        })}
      </Swiper>
    </div>    
        <h1>Lucy the Necromancer од Дамјан Михаилов - 2024</h1>
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
            <img src="./lucy/Lucy-13.jpg" alt="lucy" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./lucy/Lucy-17.jpg" alt="lucy" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./lucy/Lucy-25.jpg" alt="lucy" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./lucy/Lucy-33.jpg" alt="lucy" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="./lucy/Lucy-35.jpg" alt="lucy" />
        </SwiperSlide>
      </Swiper>    
    </div>
        <div className="member-links">
            <BackToHome />
            <Link onClick={scrollToTop}>Лифт до горе</Link>
        </div>
    </div>
}

export default StripTrip;