import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SlideSwiperAutoplayProgress = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
               
            >
                <SwiperSlide className='w-[250px]' ><p className='h-[100px] w-full bg-[#000] rounded'>Slide 1</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 2</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 3</p></SwiperSlide>
                <SwiperSlide className='w-[250px]' ><p className='w-full h-[100px] bg-black rounded'>Slide 4</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 5</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 6</p></SwiperSlide>
                <SwiperSlide className='w-[250px]' ><p className='w-full h-[100px] bg-black rounded'>Slide 7</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 8</p></SwiperSlide>
                <SwiperSlide className='w-[250px]' ><p className='w-full h-[100px] bg-black rounded'>Slide 9</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 10</p></SwiperSlide>
                <SwiperSlide ><p className='w-[250px] h-[100px] bg-black'>Slide 11</p></SwiperSlide>
                <SwiperSlide className='w-[250px]' ><p className='w-full h-[100px] bg-black rounded'>Slide 12</p></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="14"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
