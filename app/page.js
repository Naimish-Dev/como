
"use client"
import { useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import Location from "./components/Location";
import OverView from "./components/OverView";
import Interior from "./components/Interior";
import Payment from "./components/Payment";
import Amenities from "./components/Amenities";

export default function Home() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <main>
      <div className="cursor"></div>

      <HeroSection />
      <OverView />
      <Interior />
      <Payment />
      <Amenities />
      <Location />
    </main>
  );
}
