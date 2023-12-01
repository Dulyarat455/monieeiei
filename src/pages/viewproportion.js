import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from "next/font/google";
import Navbar from "../components/navbar";
import Icon from "../../public/images/Icon.svg";
import Link from "next/link";
const inter = Rubik({ subsets: ["latin"], weight: ["400"] });
export default function Viewproportion() {
  return (
    <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
      <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div className=" w-[23.5rem] h-full bg-[#FAE392] rounded-t-[36px] mt-10">
          <div className=" inline-flex">
            <div className="font-rubik mt-10 ml-28 text-[32px] text-[500]">
              Propotion
            </div>
            <button>
              <Image alt="Icon" src={Icon} className=" ml-16 mt-14"></Image>
            </button>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Our budget
              </div>
              <div className=" inline-flex ml-[6.1rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-14 text-[#9B7C0D] text-[16px] font-normal absolute"
                >
                  THB
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">
                100
              </div>
              <div className=" ml-[4.7rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                %
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Food
              </div>
              <div className=" inline-flex ml-[10.4rem] mt-5 items-center">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.5rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Utilities
              </div>
              <div className=" inline-flex ml-[8.5rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Entertainment
              </div>
              <div className=" inline-flex ml-[3.65rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Transport
              </div>
              <div className=" inline-flex ml-[7.1rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Housing
              </div>
              <div className=" inline-flex ml-[8rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Personal
              </div>
              <div className=" inline-flex ml-[7.7rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Medical
              </div>
              <div className=" inline-flex ml-[8.5rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Education
              </div>
              <div className=" inline-flex ml-[6.7rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Technlogy
              </div>
              <div className=" inline-flex ml-[6.6rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Saving
              </div>
              <div className=" inline-flex ml-[9.1rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <div>
            <div className=" inline-flex ">
              <div
                htmlFor="text"
                className=" ml-10 mt-5 text-[#9B7C0D] text-[24px] font-normal"
              >
                Membership
              </div>
              <div className=" inline-flex ml-[5.2rem] mt-7 items-center ">
                <div
                  htmlFor="text"
                  className="  text-[#9B7C0D] text-[24px] font-normal"
                >
                  -
                </div>
                <div
                  htmlFor="text"
                  className=" ml-[4.3rem] text-[#9B7C0D] text-[24px] font-normal absolute"
                >
                  %
                </div>
              </div>
            </div>
            <div className=" inline-flex  ml-[16.4rem] ">
              <div className="  text-[#9B7C0D] text-[16px] font-normal">-</div>
              <div className=" ml-[3.5rem] text-[#9B7C0D] text-[16px] font-normal absolute">
                THB
              </div>
            </div>
          </div>
          <button className="bg-[#D8B4F8] mt-10 ml-32 mb-10 w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">
            SETTING
          </button>
        </div>
      </div>
    </div>
  );
}
