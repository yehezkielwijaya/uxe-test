import React, { useEffect, useState } from "react";

const BaseInput = ({
  value,
  onChange,
  type,
  name,
  label,
  placeholder,
  maxLength,
  minLength,
  helper,
}) => {
  const valueLength = value.length;
  const [callcode, setCallcode] = useState([]);

  useEffect(() => {
    getCallcode();
  }, []);

  const getCallcode = async () => {
    const res = await fetch("https://restcountries.com/v2/all/");
    const data = await res.json();
    await setCallcode(data);
  };

  return (
    <>
      {type === "tel" ? (
        <div className="flex flex-col mb-2">
          <div className="flex justify-between px-1 mb-1">
            <div className="font-medium text-acmeprimary">{label}</div>
          </div>
          <div className="border overflow-hidden border-acmeprimary shadow-lg rounded-xl w-full flex bg-white">
            <select className="p-4 w-24 overflow-hidden border-none focus:border-none focus:ring-0 focus:outline-none">
              {callcode.map((country, index) => (
                <option className="inline-block" value={country.callingCodes} key={index}>
                  +{country.callingCodes} {country.name}
                </option>
              ))}
            </select>
            <i className="border h-2/3 my-auto"></i>
            <input
              className="p-4 w-full border-none focus:border-none focus:ring-0 focus:outline-none"
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              placeholder={placeholder}
            ></input>
          </div>
          <div className="text-gray-300 px-1 py-2 w-fit">{helper}</div>
        </div>
      ) : (
        <div className="flex flex-col mb-2">
          <div className="flex justify-between px-1 mb-1">
            <div className="font-medium text-acmeprimary">{label}</div>
            <div className="flex text-acmeprimary">
              {valueLength > maxLength ||
              (valueLength < minLength && valueLength !== 0) ? (
                <div className="flex text-red-500">
                  {valueLength}/{maxLength}
                </div>
              ) : (
                <div className="flex text-acmeprimary">
                  {valueLength}/{maxLength}
                </div>
              )}
            </div>
          </div>
          <input
            className="p-4 border border-acmeprimary shadow-lg rounded-xl w-full flex bg-white"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          ></input>
          <div className="text-gray-300 px-1 py-2 w-fit">{helper}</div>
        </div>
      )}
    </>
  );
};

export default BaseInput;
