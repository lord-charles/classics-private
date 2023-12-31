"use client";
import { packages2 } from "@/utils/data";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import NestedModal from "./modal";
import { useState } from "react";

const Custom = ({ dataLenths }) => {
  const [open, setOpen] = useState(false);
  const [bandwidth, setBandwidth] = useState(0);
  const [price, setPrice] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [validity, setValidity] = useState(0);

  const data = { bandwidth, price, speed, validity };
  console.log(data);

  const wifipackage = ({ bandwidth, price, speed, validity }) => {
    setBandwidth(bandwidth);
    setPrice(price);
    setSpeed(speed);
    setValidity(validity);
    setOpen(true);
  };

  return (
    <div className="bg-gray-100 overflow-hidden w-screen">
      <NestedModal setOpen={setOpen} open={open} data={data} />

      <div className="lg:mx-[300px] md:mx-[10px] relative top-[20px]">
        <p className="text-black text-[28px] font-serif font-bold text-center ">
          Get more customized packages from us.
        </p>

        <div className="grid   md:grid-cols-3 lg:grid-cols-3 xxs:grid-cols-2 place-items-center mt-6">
          {packages2.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center space-y-3 border p-4 border-purple-500 bg-white rounded-md mb-6 shadow-md h-[400px] w-[95%]"
                key={index}
              >
                <Image
                  src={item.images}
                  alt="image"
                  width={20}
                  height={20}
                  className=""
                />
                <p className="text-black font-serif">Up to</p>
                <p className="text-black  text-[25px] text-center">
                  {item.period} for{" "}
                  {item.validity === "hour"
                    ? "1hour"
                    : item.validity === "3hour"
                    ? "3hours"
                    : item.validity === "12hour"
                    ? "12hours"
                    : item.validity === "24hour"
                    ? "24hours"
                    : item.validity}
                </p>

                <p className="text-black text-[20px] font-bold">
                  Ksh {item.price}{" "}
                </p>
                <p className="text-black">+ free installation</p>
                <div>
                  {" "}
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">{item.streaming} streaming</p>
                  </div>
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">{item.devices} devices</p>
                  </div>
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">{item.speed}Mbps(speed)</p>
                  </div>
                  <div className=" flex items-center space-x-1">
                    <Image
                      src={"/images2/icon-bullet-pointer.svg"}
                      width={10}
                      height={10}
                      alt="images"
                    />
                    <p className="text-black">
                      Units left{" "}
                      {item.id === 1
                        ? dataLenths.U1H
                        : item.id === 2
                        ? dataLenths.U1H
                        : item.id === 3
                        ? dataLenths.GB5
                        : item.id === 4
                        ? dataLenths.U12H
                        : null}
                    </p>
                  </div>
                  <div className="text-purple-700 mt-[15px]">
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() =>
                        wifipackage({
                          price: item.price,
                          bandwidth:
                            item.period === "Unlimited" ? "50Gb" : item.period,
                          speed: item.speed,
                          validity:
                            item.validity === "month"
                              ? "30days"
                              : item.validity === "week"
                              ? "7days"
                              : item.validity === "24hour"
                              ? "24hours"
                              : item.validity === "12hour"
                              ? "12hours"
                              : item.validity === "3hour"
                              ? "3hours"
                              : item.validity === "hour"
                              ? "hour"
                              : item.validity,
                        })
                      }
                    >
                      Order now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Custom;
