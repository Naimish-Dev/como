"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Location = () => {
  const [isloading, setIsloading] = useState(false);
  const [isModel, setIsModel] = useState(false);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
  const CloseSucessModelHandler = () => {
    setIsModel(false);
  };

  return (
    <Fragment>
      <div className=" py-14 px-2 " id="location">
        <h2 className="text-3xl text-black font-semibold text-center mb-6">
          Como Residences Location
        </h2>
        <div className="flex flex-col w-full md:flex-row py-14">
          <div className="flex flex-col w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(40%_-_17px)] gap-8 md:gap-4 md:ml-4 font-normal break-words text-wrap order-2 lg:order-1">
            <p className="break-all">
              The luxurious Como Residences Nakheel development is located in Palm Jumeirah, Dubai. It has the most beautiful views of the place and modern architecture, as well as a wide variety of services and facilities to enjoy. The most interesting establishments with a range of landmarks and major centres of business, employment, entertainment and more. Be a part of this incredible development that gives you the best life ahead. Some of the most incredible destinations and places are near the location.</p>
          </div>
          <div className="w-full lg:w-[calc(50%_-_17px)] xl:w-[calc(55%_-_17px)]  order-1 lg:order-2">
            <h1 className="text-black text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
              EXPRESS YOUR INTEREST
            </h1>
            <p className="mb-5 text-sm w-[80%]  mx-auto text-center">
              Register to download prices and payment plans.
            </p>

            <form className="relative flex flex-col items-center justify-center gap-2 ">

              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%]">
                <label
                  htmlFor="name"
                  className="text-black text-sm leading-[22px] tracking-[0.14px]"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-black text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%]">
                <label
                  htmlFor="email"
                  className="text-black text-sm leading-[22px] tracking-[0.14px]"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-black text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%]">
                <label
                  htmlFor="email"
                  className="text-black text-sm leading-[22px] tracking-[0.14px]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="border-[#E2E8F0] px-4 py-3  border-[1.5px] border-solid bg-white w-full outline-none placeholder:text-[#94A3B8] text-black text-sm leading-[22px] tracking-[0.14px] mt-[6px]"
                  placeholder="Enter Your Mobile Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                  required={true}
                />
              </div>
              <div className="flex flex-col w-[80%] sm:w-[70%] lg:w-[60%] mt-2">
                <button
                  disabled={isloading}
                  onClick={handleSubmit}
                  className=" px-3.5 py-3 bg-blue-800 text-white text-sm font-medium leading-5 tracking-[0.21px]"
                >
                  {isloading ? (
                    <div class="inline-block animate-spin rounded-full h-4 w-4 border-x-2 border-b-2 border-white"></div>
                  ) : (
                    "Submit"
                  )}
                </button>
                <Link
                  className="mt-2 font-semibold text-center text-black"
                  href="/Privacy-Policy"
                >
                  Privacy-Policy!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Location;
