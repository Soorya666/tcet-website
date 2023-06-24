import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, FreeMode } from "swiper";
import { Pagination } from "swiper";
import { slideObjCorporate } from "./data.js";
import { slideObjExperts } from "./data.js";
import { slideObjFaculty } from "./data.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

const Testimonials = () => {
  const mappedSlidesCorporate = slideObjCorporate.map((data) => {
    return (
      <SwiperSlide key={data.testimony}>
        <div class="p-5">
          <div class="mb-6 mt-2 bg-blue-gray-50 rounded-lg p-5">
            <div class="text-md md:text-md lg:text-xl text-slate-600 p-3">
              {data.testimony}
            </div>
            <div class="flex flex-col text-md md:text-md mt-6 ml-3 fomt-medium">
              {data.author}
            </div>
            <div class="ml-3 text-sm text-gray-600">{data.company}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const mappedSlidesExperts = slideObjExperts.map((data) => {
    return (
      <SwiperSlide key={data.testimony}>
        <div class="p-5">
          <div class="mb-6 mt-2 bg-blue-gray-50 rounded-lg p-5">
            <div class="text-md md:text-md lg:text-xl text-slate-600 p-3">
              {data.testimony}
            </div>
            <div class="flex flex-col text-md md:text-md mt-6 ml-3 fomt-medium">
              {data.author}
            </div>
            <div class="ml-3 text-sm text-gray-600">{data.company}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  const mappedSlidesFaculty = slideObjFaculty.map((data) => {
    return (
      <SwiperSlide key={data.testimony}>
        <div class="p-5">
          <div class="mb-6 mt-2 bg-blue-gray-50 rounded-lg p-5">
            <div class="text-md md:text-md lg:text-xl text-slate-600 p-3">
              {data.testimony}
            </div>
            <div class="flex flex-col text-md md:text-md mt-6 ml-3 fomt-medium">
              {data.author}
            </div>
            <div class="ml-3 text-sm text-gray-600">{data.company}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  });  

  return (
    <div>
      <div class="flex flex-col px-5 gap-4">
        <div class="flex flex-start px-2 py-3 font-inter font-semibold text-md sm-text-md lg:text-xl text-blue-600 border rounded-md bg-blue-50">
          CORPORATES
        </div>
      </div>
      <Swiper
        className="w-full mb-6 bg-slate-50"
        modules={[Navigation, FreeMode, A11y, Pagination]}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          420: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          prevEl: ".swiper-prev-corporate",
          nextEl: ".swiper-next-corporate",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={{
          clickable: true,
        }}
      >
        {mappedSlidesCorporate}
        <div className="swiper-prev-corporate flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next-corporate flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>

      <div class="flex flex-col px-5 gap-4">
        <div class="flex flex-start px-2 py-3 font-inter font-semibold text-md sm-text-md lg:text-xl text-green-600 border rounded-md bg-green-50">
          EXPERTS
        </div>
      </div>
      <Swiper
        className="w-full mb-6 bg-slate-50"
        modules={[Navigation, FreeMode, A11y, Pagination]}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          420: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          prevEl: ".swiper-prev-experts",
          nextEl: ".swiper-next-experts",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={{
          clickable: true,
        }}
      >
        {mappedSlidesExperts}
        <div className="swiper-prev-experts flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next-experts flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>


      <div class="flex flex-col px-5 gap-4">
        <div class="flex flex-start px-2 py-3 font-inter font-semibold text-md sm-text-md lg:text-xl text-orange-600 border rounded-md bg-orange-50">
          FACULTY
        </div>
      </div>
      <Swiper
        className="w-full mb-6 bg-slate-50"
        modules={[Navigation, FreeMode, A11y, Pagination]}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          420: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          prevEl: ".swiper-prev-experts",
          nextEl: ".swiper-next-experts",
          disabledClass: "swiper-button-disabled",
        }}
        pagination={{
          clickable: true,
        }}
      >
        {mappedSlidesFaculty}
        <div className="swiper-prev-experts flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 left-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-left.svg" alt="prev-image-btn" />
        </div>
        <div className="swiper-next-experts flex items-center justify-center shadow-md shadow-[0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);] absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-white w-8 h-8 rounded-full">
          <img src="/misc/chevron-right.svg" alt="next-image-btn" />
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
