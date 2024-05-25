import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const OverView = () => {
    return (
        <div className=" py-14 px-2 " id="overview">
            <h2 className="text-3xl text-black font-semibold text-center mb-10 ">
                Como Residences Overview

            </h2>
            <div className="flex flex-wrap  gap-4  items-start justify-between">
                <div className="flex flex-col w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(40%_-_17px)] gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap order-2 lg:order-1">
                    <p className="break-all">
                        Como Residences is the latest development of Nakheel located at Palm Jumeirah featuring 2 to 6-bedroom apartments, 5-bedroom penthouse apartments, and 7-bedroom Duplex apartments. Here you will experience a whole new world of possibilities and enrich your life with a variety of ways to enjoy it. It is a wonderful development with beautiful interiors and exteriors, offering a new lifestyle with a variety of amenities for residents.
                    </p>

                    <p className="break-all">
                        Living here in Como Residences Palm Jumeirah completely changes the way you spend your time. Leisure and active life facilities improve productivity and entertainment provided by the different places. Enter here with your loved ones and be amazed by the type of architecture and impeccable designs that it offers for the beauty and elegance of your homes.
                    </p>
                </div>

                <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  order-1 lg:order-2">
                    <img
                        src={"/assets/building/amenities-1.jpg"}
                        className="object-cover w-full h-[500px]"
                        alt="img"
                    />
                </div>
            </div>
        </div>
    );
};

export default OverView;
