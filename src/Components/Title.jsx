import React from "react";

export default function Title({ text1, text2 }) {
  return (
    <div className="inline-flex gap-2 items-center mb-3 prata-regular tracking-wide">
      <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className='w-8 md:w-12 h-0.5 bg-gray-500'></p>
      </div>
  );
}
