import React, { useState, useEffect } from "react";
const inter = Rubik({ subsets: ["latin"], weight: ["400"] });
import Navbar from "../components/navbar";
import { Rubik } from "next/font/google";
import Navbarbottom from "../components/navbarbottom";
import Link from "next/link";
import Scroll from "@/components/scroll";
import Category from "@/components/category";
import Slidebar from "@/components/slidebar";
import Image from "next/image";
import filter from "../../public/images/filter.png";
import Workspacesetting from "@/components/workspacesetting";

export default function Workspace_dailyexpense() {
  const [info, setInfo] = useState([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [message, setMessage] = useState("");
  const [messagestatus, setMessagestatus] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const [ownerStatus, setOwnerStatus] = useState(0);
  const [fillter, setFillter] = useState({
    workspace_id: "",
    dateIn: "",
    dateOut: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const workspaceId = localStorage.getItem("workspace_id");
    const getownerStatus = parseInt(localStorage.getItem("owner_status"));
    const getworkspaceName = localStorage.getItem("workspace_name");
    setWorkspaceName(getworkspaceName);
    setOwnerStatus(getownerStatus);
    setFillter({ ...fillter, ["workspace_id"]: workspaceId });
    const res = fetch("/api/budget/getbudgetmanagement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({ workspace_id: workspaceId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInfo(data.array);
        } else {
          console.log(data);
        }
      });
  }, []);

  const handleIconClick = () => {
    const token = localStorage.getItem("token");
    const workspaceId = localStorage.getItem("workspace_id");
    if (
      fillter["dateIn"] < fillter["dateOut"] ||
      fillter["dateIn"] === fillter["dateOut"] ||
      (!fillter["dateIn"] && !fillter["dateOut"])
    ) {
      const res = fetch("/api/budget/getbudgetmanagementfillter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify(fillter),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setInfo(data.array);
            setMessage("");
          } else {
            console.log(data);
          }
        });
    } else {
      setMessage("Wrong date selection format!");
      setMessagestatus(false);
    }
  };

  const searchCategory = (e) => {
    setCategorySearch(e.target.value);
  };
  const searchWord = (textToSearch, searchString) => {
    // Case-insensitive search for the searchString in the textToSearch
    const regex = new RegExp(searchString, "i");
    return regex.test(textToSearch);
  };

  const changeHandler = (e) => {
    setFillter({ ...fillter, [e.target.name]: e.target.value });
  };

  console.log("budget = ", info);
  console.log("Categorysearch = ", categorySearch);
  console.log("fillter = ", fillter);

  return (
    <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
      <div className="flex flex-col items-center justify-center h-full ">
        <Navbar /> {/* Change Navbar to workspace */}
      </div>
      <div className="text-[#1E1E1E] text-[32px] font-medium font-rubik mt-4 ml-8 flex">
        {workspaceName}
      </div>
      <div className="ml-8 me-8 font-normal font-rubik text-[#A7A7A7]">
        Manage your workspace finances with friends and family
      </div>

      <Slidebar />
      {/* Search */}
      <div
        style={{
          width: "screen",
          justifyContent: "space-between",
          padding: "0 30px",
        }}
        className="flex mt-4 gap-1 justify-center items-center"
      >
        <div className="relative w-screen inline-flex gap-1">
          <input
            style={{ fontSize: "13px" }}
            className=" w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] placeholder:font-rubik pl-2 placeholder-text-xs placeholder-font-rubik placeholder-font-normal"
            placeholder="Search for"
            type="text"
            onChange={searchCategory}
          />
          <button
            className="absolute right-10 translate-y-2 items-cente inline-flexr"
            onClick={handleIconClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              strokeWidth="1.5"
              stroke="#A7A7A7"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <Workspacesetting />
        </div>

        {ownerStatus === 1 && (
          <Link href="/setproportion">
            <button className="px-3 py-2.5 h-[32px] bg-purple-300 hover:bg-purple-400 rounded-lg justify-center items-center gap-2.5 inline-flex text-white text-xs font-normal font-['Rubik']">
              Proportion
            </button>
          </Link>
        )}
      </div>
      {/* Calendar */}
      <div
        style={{ justifyContent: "space-between", padding: "0 30px" }}
        className="w-screen flex mt-2 justify-start items-center"
      >
        <div className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full inline-flex justify-start items-center">
          <div
            style={{ fontSize: "13px", whiteSpace: "nowrap" }}
            className="text-neutral-400 text-xs font-normal font-['Rubik'] me-2 ml-2"
          >
            Filter by:
          </div>
          <input
            style={{ fontSize: "13px" }}
            className="w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
            placeholder="MM/DD/YYYY"
            type="date"
            name="dateIn"
            onChange={changeHandler}
          />
          <div className="text-neutral-400 text-xs font-normal justify-center items-center font-['Rubik'] ml-2 me-2">
            -
          </div>
          <input
            style={{ fontSize: "13px", width: "100%" }}
            className="justify-end w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-[32px] p-2.5 bg-[#FFFEF9] rounded-lg border border-[#D9D9D9] focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder-[#A6A6A6] placeholder-text-xs text-neutral-400 placeholder-font-rubik placeholder-font-normal"
            placeholder="MM/DD/YYYY"
            type="date"
            name="dateOut"
            onChange={changeHandler}
          />
        </div>
      </div>
      {message && (
        <div className="flex justify-center items-center ml-10 mt-1">
          <p
            className={`${
              messagestatus ? "text-green-400" : "text-red-500"
            } w-full text-left text-sm`}
          >
            {message}
          </p>
        </div>
      )}
      <Navbarbottom />
      <Scroll />
      <div className="mb-24">
        {categorySearch.length === 0 &&
          info.map((budget, index) => (
            <Category
              key={index}
              category_name={budget.category_name}
              budget={budget.budget}
              actual={budget.actual}
              remaining={budget.remaining}
            />
          ))}
        {categorySearch.length > 0 &&
          info.map(
            (budget, index) =>
              searchWord(budget.category_name, categorySearch) === true && (
                <Category
                  key={index}
                  category_name={budget.category_name}
                  budget={budget.budget}
                  actual={budget.actual}
                  remaining={budget.remaining}
                />
              )
          )}
      </div>

      {/*<div className="flex flex-col items-center justify-center h-full mt-2">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="#D9D9D9" 
                    className="w-28 h-28 mt-12">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <label className="text-[#D9D9D9] text-xs font-normal font-rubik">Do not found the transactions</label>
                    <div className="flex justify-center items-center h-full">
                        <Link href="/dailyexpense">
                            <button type="button" className="bg-[#D8B4F8] mt-4 w-40 h-12 border-bottom-4 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">Add a transaction</button>
                        </Link>
                    </div>
                {/* Use component 
            </div>*/}
      {/*<div className="flex justify-center items-center h-full">
                <Link href="/dailyexpense">
                    <button type="button" className="bg-[#D8B4F8] mt-4 w-40 h-12 border-bottom-4 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]">Add a transaction</button>
                </Link>
            </div>*/}
    </div>
  );
}
