import React from "react";

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

  return (
    <>
      {type === "tel" ? (
        <div className="flex flex-col mb-2">
          <div className="flex justify-between px-1 mb-1">
            <div className="font-medium text-acmeprimary">{label}</div>
            {/* <div className="flex text-acmeprimary">
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
        </div> */}
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
