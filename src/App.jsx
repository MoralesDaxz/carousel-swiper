import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SlideSwiper } from './components/SlideSwiperAutoplay/SlideSwiper'
import { SlideCards } from './components/SlideCards/SlideCards'
import { SlideSwiperAutoplayProgress } from './components/SlideSwiperAutplayProgress/SlideSwiperAutoplayProgress'

function App() {


  return (
    <>
   <div className='w-full '> 
      {/*   <div>
          <SlideCards></SlideCards>
        </div> */}
        <div className='w-full flex-col items-center gap-10'>
          <SlideSwiper></SlideSwiper>
        </div> 
       {/*  <div className='w-full'>
          <SlideSwiperAutoplayProgress/>
        </div> */}

   </div> 
    </>
  )
}

export default App
