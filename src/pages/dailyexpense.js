import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Rubik } from 'next/font/google'
import Navbar from '../components/navbar';
import Icon from  '../../public/images/Icon.svg'
import upload from  '../../public/images/upload.svg'
import date from  '../../public/images/date.svg'
import Link from 'next/link';
import { MultiSelect } from "react-multi-select-component";

const inter = Rubik({ subsets: ['latin'],weight:['400'] })
export default function Dailyexpense(){
   const router = useRouter();
   const [selectedValues, setSelectedValues] = useState([]);
   const [selectedValuesRequest, setSelectedValuesRequest] = useState([]);
   const [filename, setFileName] = useState("")
   const [radioCheck, setRadioCheck] = useState(1);
   const [token, setToken] = useState('');
   const [selectedFile, setSelectedFile] = useState(null);
   const [base64Image, setBase64Image] = useState('');
   const [message, setMessage] = useState("");
   const [messagestatus, setMessagestatus] = useState(false);
   const [optionMember , setOptionMember] = useState([])
   const [workspace_id , setWorkspace_id] = useState("")
   const [workspace_name , setWorkspace_name] = useState("")
   const [owner_status , setOwner_status] = useState("")
   const [info, setInfo] = useState({

      workspace_id: 0,
      workspace_name:"",
      tran_name: "",
      tran_type: "",
      category_name: "",
      pocket_name:"",
      amount:"",
      bought_date:"",
      tran_member: [],
      request_member: [],
      photo: ""

      
    });
    
    //dataset demo
    // let workspace_id = 6


    // const options = [

    //   { label: "Grapes ", value: "grapes" },
    //   { label: "Mango ", value: "mango" },
    //   { label: "Strawberry ", value: "strawberry", disabled: true },

    // ];
    const targetDate = new Date(); // Note: Months are 0-based, so 9 represents October.
    console.log(targetDate)

  // Get the day, month, and year from the target date.
    const day = targetDate.getDate();
    const month = targetDate.toLocaleString('en-US', { month: 'long' }); // Use 'en-US' locale for English month names.
    const year = targetDate.getFullYear();


    


    useEffect(() => {
      const token = localStorage.getItem("token");
      const workspaceName = localStorage.getItem("workspace_name");
      const workspaceId = localStorage.getItem("workspace_id");
      const ownerStatus = parseInt(localStorage.getItem("owner_status"));
      setWorkspace_name(workspaceName)
      setWorkspace_id(workspaceId)
      setOwner_status(ownerStatus)
      
      setToken(token);


      setInfo({ ...info, ["workspace_id"]: workspaceId ,["workspace_name"]: workspaceName }); 
    
      
      const res = fetch("/api/workspace/getworkspacemember", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
        body: JSON.stringify(({workspace_id:workspaceId})),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {

                let optionmembers = []
                console.log(data.success)
                // console.log(data.allWorkSpaceMember[0].user)
                for (let i=0 ; i< data.allWorkSpaceMember.length; i++){
                  optionmembers.push({label: data.allWorkSpaceMember[i].user.user_username ,
                    value: data.allWorkSpaceMember[i].user.user_id})
                }
                setOptionMember(optionmembers)
                // console.log("object = ",optionmembers)

            setMessage(data.message);
            setMessagestatus(true);

            // setTimeout(() => {
            //     router.push("/createworkspace");
            // }, 1000);

            } else {
              console.log(data)
              setMessage(data.message)
              setMessagestatus(false)
            }
        }
        );

    }, []);




    const changeHandler = (e) => {

      if(e.target.name === "amount"){
        setInfo({ ...info, [e.target.name]: parseFloat(e.target.value) });
      }
      else{
        setInfo({ ...info, [e.target.name]: e.target.value });
      }
   }

   const changeRadio = (e) =>{
      console.log("radio = ", e.target.value)
      if(e.target.value === 'expense'){
         setInfo({ ...info, [e.target.name]: 1 });
         setRadioCheck(1)
      }
      else{
         //income
         setInfo({ ...info, [e.target.name]: 0 });
         setRadioCheck(0)
      }
   }

   const handleDropdown = (e) => {
      setSelectedValues(e);
      let arrayDorp = []
      e.map((x)=>  {
          arrayDorp.push(x.value)
      })
      console.log("array = ",arrayDorp)
      setInfo({ ...info, ["tran_member"]: arrayDorp });
     
    };


    const handleDropdownRequest = (e) => {
      setSelectedValuesRequest(e);
      let arrayDorp = []
      e.map((x)=>  {
          arrayDorp.push(x.value)
      })
      console.log("array = ",arrayDorp)
      setInfo({ ...info, ["request_member"]: arrayDorp });
     
    };




    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
         const fileName = fileInput.files[0].name;
         console.log("Selected file name: ", fileName);
          setFileName(fileName)
        
       } else {
         console.log("No file selected");
       }
      
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setSelectedFile(file);
          setBase64Image(reader.result);
          setInfo({ ...info, ["photo"]: reader.result });
        };
      }
    };

    const submitHandler = () => {

      const res = fetch("/api/workspace/addtransactions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
        body: JSON.stringify((info)),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {

                console.log(data.success)


            setMessage(data.message);
            setMessagestatus(true);

            setTimeout(() => {
                router.push("/workspace_dailyexpense");
            }, 1000);

            } else {
              console.log(data)
              setMessage(data.message)
              setMessagestatus(false)
            }
        }
        );

    }

    console.log(info)
    console.log(info['photo'])
   //  console.log(base64Image)
    
    return(
        
        <div className={`min-h-screen bg-[#FFFEF9] ${inter.className}`}>
        <div className="flex flex-col items-center justify-center h-full ">
        <Navbar></Navbar>
        <div class="  w-[23.5rem] h-full bg-[#FAE392] rounded-t-[36px] mt-10">
            <div className=" inline-flex">
            <div className="font-rubik mt-10 text-[32px] font-[500] ml-20">Daily Expense</div>
            <Link href="https://www.youtube.com/watch?v=nlPYear59oQ">
            <Image alt="Icon" src={Icon} className="ml-10 mt-12"></Image> 
            </Link>
            </div>
            <div className=" text-[400] text-[#9B7C0D] text-[20px] ml-24">{day} {month} {year}</div> {/*ใส่วันที่*/}
            <div className=" mt-14"></div>
            <div className="flex justify-center items-center ml-12 mb-4">
                    {message && <p className={`${messagestatus ? "text-green-400": "text-red-500"} w-full text-left text-sm`}>{message}</p>}
            </div>
            <form>
            <label htmlFor="name" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400] ">NAME</label><br></br>
        <input className="mb-5 ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30  bg-[#FFFEF9] border-[#757575] placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal text-[#9B7C0D] text-[12px] font-[400]" 
        placeholder="Ex. Taxi fee (Supermarket)" 
        type="text" 
        id="name"
        name="tran_name"
        onChange={changeHandler}
        required
         /><br></br>
          <label htmlFor="type" className=" ml-14 text-[#9B7C0D]  mt-2 text-[12px] font-[400]">TYPE OF TRANSACTION</label><br></br>
        <div className=" inline-flex mt-2  ml-10">
        <input className="ml-10"
        type="radio" 
        id="expense"
        name="tran_type"
        value="expense"
        onChange={changeRadio}
         />
         <label className="text-[#9B7C0D] text-[12px] font-[400] mt-1 ml-2" for="expense">EXPENSE</label><br></br>
          <input className="ml-5"
        type="radio" 
        id="income"
        name="tran_type"
        value="income"
        onChange={changeRadio}
         /><label  className="text-[#9B7C0D] text-[12px] font-[400] mt-1 ml-2" for="income">INCOME</label><br></br>
         </div>
         { radioCheck === 1 && (

         <div className="mt-2">
         <label htmlFor="category" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">CATEGORY OF EXPENSE</label><br></br>
         <select name="category_name" id="category_name" onChange={changeHandler} className="text-[#9B7C0D] text-[14px] font-[400]  ml-14 pl-4 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]">
        <option className="ml-5" value=""  disabled selected>Select category</option>
        <option value="food">Food</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="transport">Transport</option>
        <option value="housing">Housing</option>
        <option value="personal">Personal</option>
        <option value="medical">Medical/Healthcare</option>
        <option value="education">Education</option>
        <option value="technlogy">Technlogy</option>
        <option value="saving">Saving</option>
        <option value="membership">Membership</option>
        </select>
      </div> )
      }


      <div className="mt-2">
      <label htmlFor="category" className=" ml-14 text-[#9B7C0D]  text-[12px] font-[400]">MEMBER</label><br></br>
       
       <MultiSelect
        id="category"
        options={optionMember}
        value={selectedValues}
        onChange={handleDropdown}
        
        
        className="text-[#9B7C0D] text-[14px] font-[400]  ml-14  h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]"
      /> 
     
     </div>

     <div className="mt-2">
      <label htmlFor="pocket" className=" ml-14 text-[#9B7C0D]  text-[12px] font-[400]">POCKET</label><br></br>
         <select name="pocket_name" id="pocket_name" onChange={changeHandler}   className="text-[#9B7C0D] text-[14px] font-[400]  ml-14 pl-4 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]">
        <option className="ml-5" value="" disabled selected>Select pocket</option>
        <option value="kbank">Kbank</option>
        <option value="ktb">KTB</option>
        <option value="bbl">BBL</option>
        <option value="krungsri">Krungsri</option>
        <option value="scb">SCB</option>
        <option value="ttb">ttb</option>
        <option value="uob">UOB</option>
        <option value="gsb">GSB</option>
        <option value="kkp">KKP</option>
        <option value="baac">BAAC</option>
        <option value="tisco">Tisco</option>
        <option value="lhbank">LH Bank</option>
        <option value="cash">Cash wallet</option>

     </select>
      {/* <MultiSelect
        id="category"
        options={options}
        value={selectedValues}
        onChange={handleDropdown}
        labelledBy="Select"
      /> */}
     
     <br></br></div>
     

    <div className="mt-2">
     <label htmlFor="total" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">TOTAL</label><br></br>
        <input className="ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] text-[#9B7C0D] text-[12px] font-[400]  placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal placeholder:pl-48" 
        type="text" 
        id="total"
        name="amount"
        placeholder="THB"
        onChange={changeHandler}
        required
         />
      </div>
      <div className="mt-2">
        <label htmlFor="a" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">ATTACH A PHOTO</label><br></br>
        <div className="inline-flex">
        <div className="pl-5 pt-3 text-[#9B7C0D] text-[12px] font-[400] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] w-[16rem]  ml-14 h-10">{filename}</div>
        <label htmlFor="picture" className=""><Image alt="upload" src={upload} className="mt-3 ml-2 "></Image></label><br></br></div>
        <input className="mb-5  invisible hidden" 
        type="file"  
        accept=".jpg, .jpeg, .png"    
        id="picture"
        name="picture"
        onChange={handleFileChange}
        required
         />
       </div>
       <div className="mt-2">
        <label htmlFor="a" className=" ml-14 text-[#9B7C0D] text-[12px] font-[400]">SET A DATE MANUALLY</label><br></br>
        <div className="inline-flex">
        <input className="ml-14 h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575] text-[#9B7C0D] text-[12px] font-[400]  placeholder-[#9B7C0D] placeholder:font-rubik pl-5 placeholder:text-[13px] placeholder:font-normal placeholder:pl-48" 
                        placeholder="DD/MM/YYYY" 
                        type="date" 
                        id="DOB" 
                        name="bought_date"
                        onChange={changeHandler}
                       />
       <br></br></div>
       </div>

      { radioCheck === 1 && (
       <div className="mt-2">
      <label htmlFor="category" className=" ml-14 text-[#9B7C0D]  text-[12px] font-[400]">SEND A REQUEST MONEY TO</label><br></br>
         
         <MultiSelect
        id="request"
        options={optionMember}
        value={selectedValuesRequest}
        onChange= {handleDropdownRequest}
        
        
        className="text-[#9B7C0D] text-[14px] font-[400]  ml-14  h-10 w-[16rem] rounded-lg border-[1px] border-opacity-30 bg-[#FFFEF9] border-[#757575]"
      /> 
     
     
     <br></br></div>
      )}

                                                
        </form>
        {/* <Image src={base64Image} alt="Base64 Image" width={300} height={200} /> */}
        <div className="inline-flex">
        <button className="bg-[#FFFEF9] mt-10 ml-12 w-32 h-10 rounded-xl text-[#CA8DFF] font-rubik text-sm hover:bg-[#CA8DFF] hover:text-[#FFFFFF]">BACK</button>
        <button className="bg-[#D8B4F8] mt-10 ml-5 mb-10 w-32 h-10 rounded-xl text-white font-rubik text-sm hover:bg-[#CA8DFF]" onClick={() => {submitHandler()}}>ADD NOW</button>
        </div>
        </div>
        </div>
        </div>
    )
}
