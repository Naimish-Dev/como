"use client";

import React, { useRef, useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const CustomModal = ({ CloseModelHandler }) => {
  const input = useRef();
  const model = useRef();
  const router = useRouter();

  const [isloading, setIsloading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const checkModelHandler = (e) => {
      if (!model.current.contains(e.target)) {
        CloseModelHandler();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        CloseModelHandler();
      }
    };

    const handleClickOutside = (e) => {
      checkModelHandler(e);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [CloseModelHandler]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && phone) {
      setIsloading(true);
      try {
        const response = await fetch("/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
          }),
        });
        const data = await response.json();
        if (data.status === 200) {
          sessionStorage.setItem("Token", "true");
          CloseModelHandler();
          router.push("/thankyou");
          setName("");
          setEmail("");
          setPhone("");
        }
      } catch (error) {
      } finally {
        setIsloading(false);
      }
    } else {
      input.current.focus();
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Fragment>
      <div
        ref={model}
        className="w-[350px] sm:w-fit fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[99] px-4 model-blur rounded-md"
      >
        <div className="mt-3 ml-2 ">
          <IoClose
            onClick={CloseModelHandler}
            className="ml-auto hover:scale-125  text-2xl text-right text-white transition-all duration-300 cursor-pointer"
          />
        </div>
        <div className="py-4 pb-8">
          <h1 className="text-white text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
            EXPRESS YOUR INTEREST
          </h1>
          <p className=" mb-5 text-sm text-center text-white font-medium">
            Register to download prices and payment plans.
          </p>

          <form
            className="flex flex-col items-center justify-center gap-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-[80%] sm:w-[70%] ">
              <label
                htmlFor="name"
                className="text-white text-sm leading-[22px] tracking-[0.14px]"
              >
                Name
              </label>
              <input
                ref={input}
                type="text"
                className="border-[#E2E8F0]   px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-white text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                placeholder="Enter Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                required={true}
              />
            </div>
            <div className="flex flex-col w-[80%] sm:w-[70%] ">
              <label
                htmlFor="email"
                className="text-white text-sm leading-[22px] tracking-[0.14px]"
              >
                Email
              </label>
              <input
                type="email"
                className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-white text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                placeholder="Enter Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                required={true}
              />
            </div>
            <div className="flex flex-col w-[80%] sm:w-[70%] ">
              <label
                htmlFor="email"
                className="text-white text-sm leading-[22px] tracking-[0.14px]"
              >
                Phone
              </label>
              <input
                type="tel"
                className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-white text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                placeholder="Enter Your Mobile Number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                required={true}
              />
            </div>
            <div className="flex flex-col w-[80%] sm:w-[70%] mt-3">
              <button
                disabled={isloading}
                className=" transition-all hover:scale-105 duration-300  px-3.5 py-3 bg-blue-800 text-white text-sm font-medium leading-5 tracking-[0.21px]"
                onClick={stopPropagation}
              >
                {isloading ? (
                  <div class="inline-block animate-spin rounded-full h-4 w-4 border-x-2 border-b-2 border-white"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            <Link className="text-white " href={"/Privacy-Policy"}>
              Privacy-Policy!
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomModal;
