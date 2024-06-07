import dateFormat from "dateformat";
import { useState } from "react";

const DateComponents = () => {
  const now = new Date();
  const formattedDate = dateFormat(now, "dddd, mmmm dS, yyyy");

  let time = new Date().toLocaleTimeString("en-US", { hour12: false });

  let today = new Date();
  let curHr = today.getHours();

  const [currentTime, setCurrentTime] = useState(time);
  const UpdateTime = () => {
    const currTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setCurrentTime(currTime);
  };
  setInterval(UpdateTime, 1000);
  setInterval(formattedDate, 1000 * 60 * 60 * 24);

  return (
    <>
      <div className="items-center text-white pt-9">
        <h1 className="text-2xl text-center">
          Hello, Good{" "}
          {`${curHr <= 12 ? "Morning" : curHr <= 18 ? "Afternoon" : "Evening"}`}
        </h1>
        <div className="text-lg text-center">{formattedDate}</div>
        <div className="text-2xl text-center">{currentTime}</div>
      </div>
    </>
  );
};

export default DateComponents;
