"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Amenities = () => {
  return (
    <>
      <div className="mb-16" id="amenities">
        <h2 className="text-3xl text-black font-semibold text-center mb-10">
          Como Residences Amenities
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <div className="w-full lg:w-1/2 xl:w-[60%]">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="ctm_slider"
          >
            <SwiperSlide>
              <img
                src={"/assets/building/amenities4.jpg"}
                className="object-cover w-full h-[500px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/assets/building/amenities3.jpg"}
                className="object-cover w-full h-[500px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/assets/building/amenities2.jpg"}
                className="object-cover w-full h-[500px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/assets/building/amenities1.jpg"}
                className="object-cover w-full h-[500px]"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={"/assets/building/amenities.jpg"}
                className="object-cover w-full h-[500px]"
                alt="img"
              />
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="flex flex-wrap justify-center items-center w-full lg:w-[calc(50%_-_32px)] xl:w-[calc(40%_-_32px)] py-8 px-2 md:px-8">
          <div className="w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center ">
            <Image
              src="/assets/amenities/Balcony.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Balcony</h3>
          </div>
          <div className="w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center">
            <Image
              src="/assets/amenities/BBQ-Area.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>BBQ
              Area
            </h3>
          </div>
          <div className="w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center ">
            <Image
              src="/assets/amenities/Children-Play-Area.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Children &
              Play Area</h3>
          </div>

          <div className="w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center">
            <Image
              src="/assets/amenities/Gym.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Gym
              Facilities
            </h3>
          </div>
          <div className="w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center ">
            <Image
              src="/assets/amenities/Leisure-Family-Area.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Leisure</h3>
          </div>
          <div className="flex flex-col w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center">
            <Image
              src="/assets/amenities/Shoping-Mall.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Shoping
              Complex</h3>
          </div>
          <div className="flex flex-col w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center">
            <Image
              src="/assets/amenities/Pool.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Swimming
              Pool</h3>
          </div>
          <div className="flex flex-col w-1/2 md:w-[33%] lg:w-1/2 gap-1 mb-2 text-center">
            <Image
              src="/assets/amenities/Restaurants.png"
              alt="Background Image"
              height={70}
              width={70}
              className="object-contain mx-auto "
            />
            <h3>Restaurants</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenities
