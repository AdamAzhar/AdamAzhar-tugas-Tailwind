import logo from "./agung.png";
import naspad from "./Naspad (2).png";
import batikframe1 from "./batikframe1.png";
import batikframe2 from "./batikframe2.png";
import padang from "./padang.jpg";
import chef from "./chef.jpg";
import deli from "./DeliveryMan.png";
import loca from "./Location.png";
import soso from "./SocialMedia.png";

import "./header.css";

import React, { useState } from "react";

function Header() {
  const [gambar, setGambar] = useState(chef);

  return (
    <>
      <div className="  w-full h-full bg-gradient-to-r from-orange-200 from-10% via-red-400 via-100%">
        <div className=" sticky top-0 flex ml-20 gap-10 mt">
          <div className="icon">
            <img className="h-12 w-[180px] mt-3" src={logo} alt="Icon" />
          </div>
          <div className="nav flex gap-3 mt-5 ">
            <div className="  duration-[900ms]  hover:text-rose-600 brightness-150">
              Home
            </div>
            <div className=" duration-[900ms]  hover:text-amber-500 brightness-150">
              Studio
            </div>
            <div className="  duration-[900ms]  hover:text-teal-500 brightness-150 ">
              Works
            </div>
            <div className="  duration-[900ms]  hover:text-green-800 brightness-150">
              Contact
            </div>
          </div>
          <div className="search ml-[500px] mt-3">🔎</div>
          <button className="font-mono mb-10 mt-3 mr-10 duration-[900ms] bg-pink-400 shadow-pink-400 shadow-xl w-40 rounded-md text-center py-0 hover:bg-orange-300 hover: shadow-orange-300">
            Be Agung Now
          </button>
        </div>
        {/* Frame Batik Animation */}
        <div className="flex">
          <img
            className=" anispin2 h-[100px] w-[100px] mr-64 ml-12 absolute"
            src={batikframe1}
            alt=""
          />
          <img
            className=" anispin h-[130px] w-[130px] mt-[-30PX] ml-[35rem] absolute"
            src={batikframe2}
            alt=""
          />
          <img
            className=" anispin2 h-[120px] w-[120px] mt-[19rem] ml-[30rem] absolute"
            src={batikframe1}
            alt=""
          />
          <img
            className=" anispin h-[150px] w-[150px] mt-[-1rem] ml-[67rem] absolute"
            src={batikframe2}
            alt=""
          />
          <img
            className="  anispin h-[450px] w-[450px] ml-[700px] absolute "
            src={batikframe2}
            alt=""
          />
          <img
            className="  anispin h-[150px] w-[150px] mt-[39rem] ml-[29rem] absolute "
            src={batikframe2}
            alt=""
          />
          <img
            className="  anispin2 h-[250px] w-[250px] mt-[60rem] ml-[57rem] absolute "
            src={batikframe1}
            alt=""
          />
          <img
            className="  anispin2 h-[150px] w-[150px] mt-[63rem] ml-[12rem] absolute "
            src={batikframe2}
            alt=""
          />
          <img
            className="  anispin2 h-[250px] w-[250px] mt-[60rem] ml-[57rem] absolute "
            src={batikframe2}
            alt=""
          />
        </div>
        {/* End Of frame batik animation */}
        {/* Hiro */}
        <div className="flex">
          <div className="ml-44 mt-20">
            <p className="font-bold text-[50px] text-red-500">
              Cook. Serve. <br />
              Delicious.
            </p>
            <p className="mt-2 text-orange-500">- What We Cook</p>
            <p className="mt-3 text-black">
              We cook typical dishes from a region in Indonesia where <br />
              the name of the food is Nasi Padang
            </p>
            <button className=" duration-[500ms] p-2 mt-3 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg text-[15px] hover:from-pink-500 hover:to-red-600 hover:text-white ">
              Learn More
            </button>
          </div>
          <div className="ml-[154px] mt-9">
            <img className="h-[400px] w-[10] anim" src={naspad} alt="" />
          </div>
        </div>
        {/* second hiro */}
        <div className="w-full h-[150vh]">
          <div className="flex">
            <img
              className="h-72 ml-20 mt-64 rounded-xl shadow-lg shadow-slate-950 "
              src={padang}
              alt=""
            />

            <p className="mt-[17rem] ml-[5rem] text-5xl text-white font-bold ">
              <div className="text-rose-600">
                The place where Nasi Padang is created
              </div>
              <div className="font-bold text-2xl mt-4">
                - Fact About This Food
              </div>

              <p className="font-normal text-xl mt-3">
                Padang food originates from West Sumatra,br Indonesia. It is
                specifically <br /> associated with the Minangkabau people, who
                are an ethnic group native to <br /> the region.
              </p>
            </p>
          </div>
          <div className="ml-[25em] mt-[-16rem] rotate-12">
            <img
              className="h-[100px] w-[10] anim
                "
              src={naspad}
              alt=""
            />
          </div>
        </div>
        {/* About Me End */}
        {/* Part 3 Soscial Product And Dll */}
        <div className="w-full h-[140vh]">
          <div
            className=" text-7xl mb-96 ml-40
          "
          >
            <button
              className="font-mono  font-extrabold duration-1000 hover:text-rose-500"
              onClick={() => setGambar(chef)}
            >
              Reliable Cooker
            </button>
            <br />
            <button
              className="font-mono font-extrabold duration-1000 hover:text-green-500"
              onClick={() => setGambar(deli)}
            >
              Delivery
            </button>
            <br />
            <button
              className="font-mono font-extrabold duration-1000 hover:text-yellow-500"
              onClick={() => setGambar(loca)}
            >
              Location
            </button>
            <br />
            <button
              className="font-mono font-extrabold duration-1000 hover:text-orange-900"
              onClick={() => setGambar(naspad)}
            >
              Product
            </button>
            <br />
            <button
              className="font-mono font-extrabold duration-1000 hover:text-emerald-800"
              onClick={() => setGambar(soso)}
            >
              Social Media
            </button>
            <div>
              <img
                className="h-[30rem] w-[10] relative top-[-27rem] left-[45rem]
              "
                src={gambar}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
