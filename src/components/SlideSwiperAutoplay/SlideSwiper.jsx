// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SlideSwiper = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={10}
                slidesPerView={4}
                parallax={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
           
                /* navigation */
                pagination={{ dynamicBullets: true }}

                /*  scrollbar={{ draggable: true }} */
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 1</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 2</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 3</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 4</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 5</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 6</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 7</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 8</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 9</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 10</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 11</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 12</p></SwiperSlide>
            </Swiper>
        </>

    );
};