import React from "react";
import classNames from "classnames";

export default function Tag(props) {
    const classStr = classNames(
        "flex justify-center items-center rounded-2xl h-4 uppercase tracking-[2px] px-2 w-fit text-[9px] font-bold",
        props.textColor,
        props.bgColor
    )
  return (
    <div className={classStr}>
      {props.children}
    </div>
  );
}
