import React from "react";
import clockIcon from "../../Assets/icons/Clock.svg";
import instagramIcon from "../../Assets/icons/Instagram Icon.svg";

export default function BannerCard(props) {
  return (
    <div className="w-full h-72 md:w-1/2 md:my-auto mb-6 bg-white border border-acmeprimary rounded-xl overflow-hidden text-acmeprimary">
      <div className="bg-flower-banner w-full h-1/2 bg-cover"></div>
      <div className="p-4 flex flex-col">
        <div className="flex justify-center items-center rounded-2xl h-4 bg-acmeprimary text-white uppercase tracking-[2px] px-2 w-fit text-[9px] font-bold">
          {props.tag}
        </div>
        <div className="font-bold mt-3 mb-2">{props.title}</div>
        <div>
          <span>mulai dari </span>
          <span className="line-through">{props.normalPrice}</span>
          <span className="font-bold text-red-500"> {props.discPrice}</span>
        </div>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex justify-center items-center font-medium">
            <img src={clockIcon} className="inline-block" alt="clock icon" />{" "}
            {props.time}
          </div>
          <div>
            <img src={instagramIcon} className="inline-block" alt="ig icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
