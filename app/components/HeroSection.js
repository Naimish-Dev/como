"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CustomModal from "./CustomModal";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export const HeroSection = () => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const handleDownload = () => {

    const pdfUrl = "";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Como Residences.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const [isModel, setIsModel] = useState(false);

  const CloseModelHandler = () => {
    setIsModel(false);
  };



  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    setTimeout(() => {
      if (!token) {
        setIsModel(true);
      }
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${isSidebarActive ? `translate-x-0` : "-translate-x-full"
          }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-black bg-opacity-50 text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className="text-white flex justify-between  text-3xl bg-black p-2 py-4">
              <Link href={"/"} className="text-center">
                <img src="/assets/logo/logo.png" className="h-14" alt="img" />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <ul className=" text-center h-full w-full flex flex-col justify-center items-center">
              <Link href="../#overview">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  OVERVIEW
                </li>
              </Link>
              <Link href="../#amenities">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  AMENITIES
                </li>
              </Link>
              <Link href="../#interior">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  INTERIOR
                </li>
              </Link>
              <Link href="../#payment">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  PAYMENT PLAN
                </li>
              </Link>


              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">

                  LOCATION
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen text-white bg-gradient-to-b from-black/75  to-transparent py-4 px-2 bg-opacity-30">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img src="/assets/logo/logo.png" className="h-16" alt="img" />
          </Link>
          <div className=" gap-4 font-medium hidden sm:flex mr-4">

            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#overview"}
            >
              OVERVIEW
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#amenities"}
            >
              AMENITIES
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#interior"}
            >
              INTERIOR
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#paymnet"}
            >
              PAYMENT PLAN

            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#location"}
            >
              LOCATION
            </Link>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden "
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList />
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="assets/building/amenities.jpg"
          className="w-screen h-screen object-cover"
          alt="img"
        />

        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-40">
          <div className="text-white  flex gap-4 flex-col">
            <h2 className="text-2xl sm:text-3xl text-center font-bold">
              COMO RESIDENCE
            </h2>
            <p className="text-md  w-[90%] md:w-[75%] mx-auto  text-center ">
              Como Residences is the latest development of Nakheel located at Palm Jumeirah.
            </p>

            <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
              <button
                onClick={() => {
                  const token = sessionStorage.getItem("Token");
                  if (token) {
                    handleDownload()
                  } else {
                    setIsModel(true)
                  }
                }}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-white bg-blue-800 text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Download Broucher
              </button>
              <button
                onClick={() => setIsModel(true)}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Show your Interest
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModel && (
        <CustomModal
          CloseModelHandler={CloseModelHandler}
        ></CustomModal>
      )}


    </div>
  );
};
