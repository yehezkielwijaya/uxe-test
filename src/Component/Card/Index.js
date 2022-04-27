import React from "react";
import clockIcon from "../../Assets/icons/Clock.svg";
import instagramIcon from "../../Assets/icons/Instagram Icon.svg";
import Tag from "../Tag/Index";

export default function BannerCard(props) {
  return (
    <div className="w-full h-72 md:w-1/2 md:max-w-[483px] md:mt-9 mb-6 bg-white border border-acmeprimary rounded-xl overflow-hidden text-acmeprimary">
      <div className="bg-flower-banner w-full h-1/2 bg-cover"></div>
      <div className="p-4 flex flex-col">
        <Tag bgColor="bg-acmeprimary" textColor="text-white">Penting</Tag>
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
