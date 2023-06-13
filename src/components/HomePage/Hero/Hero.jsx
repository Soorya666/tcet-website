import React, {useRef } from 'react';
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow]);

const slide_img = [
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-1.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-2.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-3.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-4.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-5.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-6.jpg"
  },
  {
    text:"Academic + Fun + Wellness = Life@TCET",
    img: "/HomePage/Hero/slider-7.jpg"
  }
];



const App = () => {

    const iframeRef = useRef(null);

    const handleDialogClose = () => {
      const iframe = iframeRef.current;
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      iframe.src = '';
      favDialog.close();
    };

    const handleClick = () => {
      const iframe = iframeRef.current;
      
        iframe.src="https://www.youtube.com/embed/bZiC538_JU8"
        
        favDialog.showModal()
    }

    SwiperCore.use([Autoplay])
  return (
    <> 
      <div className="relative">
        <div className="absolute top-4 left-4 lg:top-auto lg:left-auto lg:bottom-4 lg:right-4 z-10">
          <button className="px-4 py-2 bg-white rounded-3xl text-sm text-black" onClick={handleClick}>
          <svg width="24" height="24" viewBox="0 0 24 24" className="inline-block mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 5.37257 5.3726 0 12 0C15.1826 0 18.2349 1.26428 20.4853 3.5147C22.7357 5.76515 24 8.81741 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12ZM9.80406 17.136L16.8 12.768C17.0618 12.6003 17.2202 12.3109 17.2202 12C17.2202 11.6891 17.0618 11.3996 16.8 11.232L9.78003 6.86401C9.50355 6.68968 9.15426 6.67897 8.86761 6.83597C8.58096 6.99302 8.40195 7.29313 8.40006 7.62001V16.38C8.39619 16.7148 8.57849 17.0241 8.87328 17.1828C9.16808 17.3416 9.52664 17.3235 9.80406 17.136Z" fill="#101828"/>
          </svg>
            Play the Tour
          </button>
        </div>
        <Swiper
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          coverflowEffect={{
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          autoplay={{ delay: 2000 }}
          speed={1000}
          className="mySwiper"
        >
          {slide_img.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="relative w-full md:w-full lg:w-full h-96">
                  <img src={el.img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute bottom-7 left-4 w-full md:w-[500px] lg:w-[700px]">
                    <h1 className="text-6xl text-white bg-black bg-opacity-5 font-title">
                      {el.text}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

        <dialog id="favDialog" className='w-[1000px] rounded-md bg-black bg-opacity-50'>
          <div className="relative w-full md:w-full lg:w-full h-96">
            <iframe id="videoId"  className='rounded-md'
                      width="100%"
                      height="100%" 
                      src="https://www.youtube.com/embed/bZiC538_JU8" 
                      title="YouTube video player" 
                      frameborder="0" 
                      allowfullscreen
                      ref={iframeRef}>        
            </iframe>

            <button className='absolute px-4 py-2 bg-white rounded-3xl text-sm text-black' style={{ top: '10px', right: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={handleDialogClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 w-8 h-8" style={{ color: 'white',borderRadius: '50%', marginRight: '5px' }} viewBox="0 0 24 24" id="back-arrow"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" opacity="0" transform="rotate(90 12 12)"></rect><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"></path></g></g></svg>
            <span>Back to Slides</span>
          </button> 
          </div>
        </dialog>

    </>
  );
};

export default App;