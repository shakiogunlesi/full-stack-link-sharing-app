import type { NextPage } from "next";
import React from 'react';

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[24px] ${className}`}
    >
      <div className="self-stretch h-px relative bg-borders" />
      <div className="flex flex-row items-start justify-end py-0 px-10">
        <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple rounded-lg flex flex-row items-start justify-start opacity-[0.25] hover:bg-mediumslateblue-100">
          <div className="relative text-base leading-[150%] font-semibold font-heading-s text-white text-left inline-block min-w-[37px]">
            Save
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
