import React from "react";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill, GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiFolderOpen } from "react-icons/hi2";
import { MdOutlineDownloading } from "react-icons/md";



function HomePage() {
  return (
    <div className="bg-black h-16">
      <div className="grid grid-rows-1 grid-cols-3 gap-4 ">
        {/* Spotify Icon */}
        <div className="pl-[28px] pt-4 pb-4">
          <FaSpotify size={33} className="text-white bg-black" />
        </div>

        {/* GoHomeFill Icon and Search Bar */}
        <div className="pl-[50px] flex items-center space-x-2">
          {/* GoHomeFill Icon */}
          <div className="bg-[#282828] w-[49px] h-[49px] flex items-center justify-center rounded-full shrink-0">
            <GoHomeFill size={28} className="text-white" />
          </div>

          {/* Search bar */}
          <div className="flex items-center rounded-full bg-[#282828] w-[473px]">
            <div className=" pl-[10px]">
              <CiSearch size={26} className="text-[#B3B3B3]" />
            </div>
            <input
              type="text"
              placeholder="¿Qué quieres reproducir?"
              className="bg-[#282828] placeholder-[#B3B3B3] text-white rounded-full px-2 py-2 w-[380px] outline-none h-[49px] "
            />
            <div className="pl-[16px] ">
              <HiFolderOpen size={26} className="text-[#B3B3B3]" />
            </div>
          </div>
        </div>





        
        {/* GoHomeFill Icon and Search Bar */}
        <div className="pl-[393px] pt-4 pb-4  flex items-center ">
            <MdOutlineDownloading size={23} className="text-white pr-[3px]"/>
            <p className="text-white text-sm font-bold pr-[37px]">Instalar app</p>
            <GoBell size={18} className="text-white"/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
