import React from "react";

export default function AcmeButton(props) {
    return (
      <div className="rounded-xl pb-3 bg-acmesecondary w-full mt-4">
        <div className="rounded-xl p-4 bg-acmeprimary text-white font-medium text-center border border-acmesecondary">
          {props.children}
        </div>
      </div>
    );
  }