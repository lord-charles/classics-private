"use client";
import { Hero, Packages, Custom, Tabs, Customerservice } from "@/components";
import { base_url } from "@/utils/baseUrl";
import { Divider } from "@mui/material";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import ReactPlayer from "react-player";

const Home = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [GB70, setGB70] = useState(0);
  const [GB140, setGB140] = useState(0);
  const [GB280, setGB280] = useState(0);
  const [GB40, setGB40] = useState(0);
  const [GB60, setGB60] = useState(0);
  const [GB80, setGB80] = useState(0);
  const [GB5, setGB5] = useState(0);
  const [U1H, setU1H] = useState(0);
  const [U3H, setU3H] = useState(0);
  const [U12H, setU12H] = useState(0);

  const packagesDataLenths = {
    GB70,
    GB140,
    GB280,
    GB40,
    GB60,
    GB80,
  };
  const customDataLenths = {
    GB5,
    U1H,
    U3H,
    U12H,
  };

  const getUnits = async () => {
    try {
      const response1 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "80Gb",
        speed: "10",
        validity: "7days",
      });
      setGB80(response1.data.length);

      const response2 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "70Gb",
        speed: "5",
        validity: "30days",
      });
      setGB70(response2.data.length);

      const response3 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "280Gb",
        speed: "10",
        validity: "30days",
      });
      setGB280(response3.data.length);

      const response4 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "140Gb",
        speed: "8",
        validity: "30days",
      });
      setGB140(response4.data.length);

      const response5 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "50Gb",
        speed: "5",
        validity: "12hours",
      });
      setU12H(response5.data.length);

      const response6 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "40Gb",
        speed: "5",
        validity: "7days",
      });
      setGB40(response6.data.length);

      const response7 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "60Gb",
        speed: "8",
        validity: "7days",
      });
      setGB60(response7.data.length);

      const response8 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "50Gb",
        speed: "8",
        validity: "3hours",
      });
      setU3H(response8.data.length);

      const response9 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "50Gb",
        speed: "8",
        validity: "hour",
      });
      setU1H(response9.data.length);

      const response10 = await axios.post(`${base_url}vouchers/by-criteria`, {
        bandwidth: "5Gb",
        speed: "10",
        validity: "24hours",
      });
      setGB5(response10.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlayerReady = () => {
    setIsVideoReady(true);
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    scrollToTop();
    getUnits();
  }, []);

  return (
    <div className=" overflow-hidden w-screen">
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 10000,
        }}
      />
      <Customerservice />

      <Hero />
      <Packages dataLenths={packagesDataLenths} />
      <Custom dataLenths={customDataLenths} />
      <div className="py-4 bg-gray-100">
        <div className=" lg:mx-[320px] md:-[10px]">
          <p className="text-black text-center text-[30px] font-serif font-bold py-4">
            Why Lumos Classics fiber?
          </p>
          <div className="flex md:justify-evenly xxs:flex-col md:flex-row lg:flex-row xxs:space-y-6 lg:justify-evenly space-x-6">
            <ReactPlayer
              url="/Fiber.mp4"
              controls
              width="100%"
              height="auto"
              playing={isVideoReady}
              onReady={handlePlayerReady}
              AutoPlay
            />
            <div className="">
              <div
                className="flex space-x-2  justify-center items-center
                  "
              >
                <Divider className="bg-purple-600 w-[100px]" />
                <p className="text-black font-serif text-[20px]">
                  Internet built for every need
                </p>
                <Divider className="bg-purple-600 w-[100px]" />
              </div>
              <div className="mt-3 flex flex-col space-y-5">
                <div className="flex items-center space-x-4">
                  <Image
                    src={"/images2/icon-wifi.svg"}
                    width={70}
                    height={70}
                    alt="image"
                  />
                  <p className="text-black">
                    <a className="text-[17px] font-bold">
                      Built for whole-home.
                      <br />
                    </a>
                    Wi-Fi Stream and share from any room with whole-home
                    coverage.
                  </p>
                </div>

                <div className="mt-3">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={"/images2/icon-built-for-the-future.svg"}
                      width={70}
                      height={70}
                      alt="image"
                    />
                    <p className="text-black">
                      <a className="text-[17px] font-bold">
                        Built for multiple devices. <br />
                      </a>
                      Get fast connections for every device in every room.
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={"/images2/icon-built-for-speed.svg"}
                      width={70}
                      height={70}
                      alt="image"
                    />
                    <p className="text-black">
                      <a className="font-bold text-[17px]">
                        Built for speed .<br />
                      </a>
                      Upload and download at lightning speed without delays.
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={"/images2/icon-2000x2000-speed.svg"}
                      width={70}
                      height={70}
                      alt="image"
                    />
                    <p className="text-black">
                      <a className="text-[17px] font-bold">
                        Built for unlimited data. <br />
                      </a>
                      We’ll never cap your data or throttle your speeds, unlike
                      cable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
