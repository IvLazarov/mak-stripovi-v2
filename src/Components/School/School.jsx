import BackToHome from '../BackToHome/BackToHome';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './School.css';


const School = () => {
    const scrollToTop = () => {
        window.scrollTo(0,0)
    }

    return <div className='school-container'>
        <h1>Стрип Школа</h1>
        <div className="description">
            <p>
            Уште од 2011 година си имаме школа за стрипови. Во неа ги образуваме 
            младите и креативни умови од скопските основни и средни училишта како да создадат свој стрип. 
            Во изданијата под текстов ќе ги прочитате нивните дела и ќе уживате во различните стилови и нарави.
            Слободно разгледајте ги и галериите подолу кои ќе ви ја доловат атмосферата на многуте часови 
            одржани низ годините.
            </p>
            
        <div>
            <Link 
            to='https://drive.google.com/file/d/1DDLqfHnsRf-vsUuGrb9yZVWpTLby8S-I/view?usp=sharing'
            target='blank'
            >Издание 2024</Link>
            <Link 
            to='https://drive.google.com/file/d/1KrTldhzSSrx-aUYCl3LNupZW2kMI5iE-/view?usp=sharing'
            target='blank'
            >Издание 2025</Link>
        </div>
        </div>
        <h1>Стрип школата низ годините</h1>
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
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="../shkola-niz-godinite/002_StripShkola_sredno.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../shkola-niz-godinite/002_StripShkola_sredno2.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../shkola-niz-godinite/003_StripShkola_osnovno1.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../shkola-niz-godinite/003_StripShkola_osnovno2.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../shkola-niz-godinite/003_StripShkola_osnovno3.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../shkola-niz-godinite/004_StripShkola_Giffoni.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
       </div>
        <h1>Часови во школата 2010</h1>
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
            <img src="../casovi/Photo0222.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0223.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0224.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0225.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0226.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0260.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0261.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0262.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0263.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0264.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0265.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0283.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0284.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0285.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0286.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0287.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0340.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0341.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0342.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0343.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0344.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0345.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0346.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0347.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0348.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0349.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0350.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0373.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0374.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0375.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0376.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0377.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0378.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0380.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0381.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0382.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0383.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0384.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0385.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0386.jpg" alt="cas-predavanje" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../casovi/Photo0387.jpg" alt="cas-predavanje" />
        </SwiperSlide>
      </Swiper>
       </div>
       <h1>Плакати за школата</h1>
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
            <img src="../plakati-za-shkolata/A3-Plakat-Skola.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../plakati-za-shkolata/Plakat-STRIP-shkola-A3.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="../plakati-za-shkolata/Strip_Shkola_plakat_B2_v4.jpg" alt="strip-shkola-poster" />
        </SwiperSlide>
      </Swiper>
       </div>
       <div className="member-links">
            <BackToHome />
            <Link onClick={scrollToTop}>Лифт до горе</Link>
            </div>
    </div>
    
}

export default School;