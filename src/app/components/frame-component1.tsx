import type { NextPage } from "next";
import React from 'react';
import Image from 'next/image';

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[111.5px] left-[137.5px] w-[285px] flex flex-col items-start justify-start pt-[174.5px] px-[23px] pb-[171.5px] box-border gap-[56px] text-left text-xs text-white font-heading-s ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-10 pl-[38px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] z-[2]">
          <div className="self-stretch h-4 relative rounded-85xl bg-whitesmoke" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-11">
            <div className="h-2 flex-1 relative rounded-85xl bg-whitesmoke" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch rounded-lg bg-gray-200 flex flex-row items-start justify-start py-[13px] px-4 gap-[8px] z-[2]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <Image
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/teenyiconsgithubsolid.svg"
            />
          </div>
          <input
            className="w-[calc(100%_-_64px)] [border:none] [outline:none] font-heading-s text-xs bg-[transparent] h-[18px] flex-1 relative leading-[150%] text-white text-left inline-block min-w-[94px] p-0"
            placeholder="GitHub"
            type="text"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <Image
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/mdiarrowright.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-crimson overflow-x-auto flex flex-row items-start justify-start py-[13px] px-4 gap-[8px] z-[2]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <Image
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/riyoutubefill.svg"
            />
          </div>
          <div className="flex-1 relative leading-[150%]">YouTube</div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <Image
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/mdiarrowright.svg"
            />
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-mediumslateblue-200 overflow-x-auto flex flex-row items-start justify-start py-[13px] px-4 gap-[8px] z-[2]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <Image
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/mdilinkedin.svg"
            />
          </div>
          <div className="flex-1 relative leading-[150%]">LinkedIn</div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <Image
              className="w-4 h-4 relative overflow-hidden shrink-0"
              alt=""
              src="/mdiarrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <Image
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/subtract.svg"
        />
        <div className="absolute top-[53.5px] left-[94px] rounded-[50%] bg-whitesmoke w-24 h-24 z-[2]" />
        <div className="absolute top-[459.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
        <div className="absolute top-[523.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
      </div>
    </div>
  );
};

export default FrameComponent1;
