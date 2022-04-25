import React from "react";

export default function AcmeInput(props) {
  return (
    <div className="pb-5 text-acmeprimary">
      <div className="flex justify-between px-1">
        <div className="font-medium">{props.title}</div>
        <div className="text-gray-400">
          {props.currChar}/{props.maxChar}
        </div>
      </div>
      <input
        className="p-4 border border-acmeprimary drop-shadow-xl rounded-xl w-full"
        placeholder={props.placeholder}
      ></input>
      <div className="text-gray-400 px-1">{props.helper}</div>
    </div>
  );
}
