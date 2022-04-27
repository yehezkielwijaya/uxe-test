import React from "react";

export default function AcmeButton(props) {
  return (
    <div className="rounded-xl pb-3 bg-acmesecondary w-full mt-4">
      <button
        onSubmit={props.onSubmit}
        className="rounded-xl p-4 w-full bg-acmeprimary capitalize text-white font-medium text-center border border-acmesecondary"
      >
        {props.children}
      </button>
    </div>
  );
}
