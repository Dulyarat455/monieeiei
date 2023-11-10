import Link from "next/link";
import Image from "next/image";
import whitecircle from '../../public/images/whitecircle.svg';

export default function Listnoti2({ username, workspacename, time, date, status }) {

  const textColor = status === 0 ? 'text-[#9b0d0d]' : 'text-[#0d9b2e]';

  // Function to determine if the time is AM or PM
  const getTimePeriod = (time) => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 12 ? 'PM' : 'AM';
  };

  return (
    <div className="inline-flex mb-3">
      <Image alt="whitecircle" src={whitecircle} className="mb-10"></Image>
      <div className="ml-3 w-[15rem]">
        <div className="text-[16px] text-[400]">
          {time} {getTimePeriod(time)}
        </div>
        <p className={`text-[16px] text-[400] ${textColor} whitespace-normal`}>
          {username} sent a request form {workspacename}&rsquo;s workspace to you for a sec.
        </p>
      </div>
    </div>
  );
}
