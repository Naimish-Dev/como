"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const index = () => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

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

  const CloseSucessModelHandler = () => {
    setIsSidebarActive(false);
  };
  return (
    <div>
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
                  onClick={CloseSucessModelHandler}
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
      <section className="min-h-[calc(100vh_-_75px)]  flex justify-center items-center dark:text-black ">
        <div className="container max-w-screen-xl px-2 mx-auto py-14 md:px-8">
          <div>
            <h3 className="mb-5 text-4xl text-center font-extrabold">
              {" "}
              Privacy Policy
            </h3>
            <div className="font-bold text-lg">
              Disclaimer: This is not the official website. This website is
              managed by an Registered authorised marketing partner. The content
              is for information purposes only and does not constitute an offer
              to avail of any service. Prices mentioned are subject to change
              without notice and properties mentioned are subject to
              availability. Images for representation purpose only. Website Only
              use for an Advertisement Purpose.
            </div>
            <div className="flex justify-center w-full my-5">
              <Link
                href="/"
                className="rounded-full px-8 py-3 bg-blue-800 text-white text-md font-medium leading-5 tracking-[0.21px]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
