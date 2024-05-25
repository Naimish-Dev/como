import Image from "next/image";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { MdVerified } from "react-icons/md";

const Interior = () => {
  return (
    <div className=" py-14 px-2  bg-gray-200" id="interior">
      <h2 className="text-3xl text-black font-semibold text-center mb-10">
        Como Residences Interior

      </h2>
      <div className="flex flex-wrap  gap-4  items-start ">
        <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)] ">
          <img
            src={"/assets/building/amenities-1.jpg"}
            className="object-cover w-full h-[500px]"
            alt="img"
          />
        </div>

        <div className="flex w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(40%_-_17px)] gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap">
          <p className="break-all">
            Living here offers you amenities and facilities that enhance your lifestyle. Nakheel Como Residences is packed with world-class amenities along with access to a designer vacation community. Experience the most elegant and epic life that changes the way you live. Here, enjoy every aspect of your life to the fullest with luxurious amenities and comfort to enjoy with more care and love. Come and explore the place that is surrounded by beautiful amenities and make beautiful memories with your loved ones.          </p>

        </div>
      </div>
    </div>
  );
};

export default Interior;
