import type { NextPage } from "next";
import React from 'react';
import Image from 'next/image';

export type InputFields1Type = {
  className?: string;
  vector1?: string;
};

const InputFields1: NextPage<InputFields1Type> = ({
  className = "",
  vector1,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-xs text-dark-grey font-heading-s ${className}`}
    >
      <div className="self-stretch relative leading-[150%]">Email address</div>
      <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-borders">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <Image
            className="w-4 h-4 relative overflow-hidden shrink-0"
            alt=""
            src="/phenvelopesimplefill.svg"
          />
        </div>
        <input
          className="w-[calc(100%_-_46px)] [border:none] [outline:none] font-heading-s text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[218px] max-w-full p-0"
          placeholder="e.g. alex@email.com"
          type="text"
        />
        <Image className="h-1.5 w-3 relative hidden" alt=""  src="/vector-1-1.svg" />
      </div>
    </div>
  );
};

export default InputFields1;
