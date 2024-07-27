import type { NextPage } from "next";
import Image from 'next/image';
import React from 'react';

export type LinkListContainerType = {
  className?: string;
};

const LinkListContainer: NextPage<LinkListContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[739px] overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-10 px-0 pb-[281px] box-border gap-[24px] max-w-full text-left text-13xl text-dark-grey font-heading-s mq450:h-auto mq450:pt-5 mq450:pb-[119px] mq450:box-border mq1050:pt-[26px] mq1050:pb-[183px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-10 pb-4 box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] shrink-0 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
            Customize your links
          </h1>
          <div className="self-stretch relative text-base leading-[150%] text-grey">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full shrink-0">
        <button className="cursor-pointer py-[9px] px-5 bg-[transparent] flex-1 rounded-lg box-border flex flex-row items-start justify-center shrink-0 max-w-full border-[1px] border-solid border-purple">
          <div className="flex flex-row items-start justify-start">
            <div className="relative text-base leading-[150%] font-semibold font-heading-s text-purple text-left inline-block min-w-[108px]">
              + Add new link
            </div>
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full shrink-0 text-base">
        <div className="flex-1 rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center p-5 box-border gap-[12px] shrink-0 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-grey mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="w-3 h-px relative bg-grey" />
                <div className="w-3 h-px relative bg-grey" />
              </div>
              <b className="relative leading-[150%] inline-block min-w-[54px]">
                Link #1
              </b>
            </div>
            <div className="relative leading-[150%] inline-block min-w-[61px]">
              Remove
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-white overflow-x-auto hidden flex-row items-center justify-start py-2.5 px-[15px] gap-[12px] border-[1px] border-solid border-borders">
            <Image
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/teenyiconsgithubsolid-1.svg"
            />
            <div className="flex-1 relative leading-[150%]">GitHub</div>
            <Image
              className="h-1.5 w-3 relative shrink-0"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="self-stretch rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-start py-2.5 px-4 gap-[12px] border-[1px] border-solid border-borders">
            <Image
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/phlinkbold-1.svg"
            />
            <a
              className="relative leading-[150%] text-[inherit] [text-decoration:none]"
              href="https://www."
              target="_blank"
              rel="noopener"
            >
              https://www.github.com/elonmusk
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-xs">
            <div className="w-[396px] relative leading-[150%] inline-block max-w-full">
              Platform
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-x-auto flex flex-row items-center justify-start py-2.5 px-[15px] gap-[12px] text-base border-[1px] border-solid border-borders">
              <Image
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/teenyiconsgithubsolid-2.svg"
              />
              <div className="flex-1 relative leading-[150%]">GitHub</div>
              <Image
                className="h-1.5 w-3 relative shrink-0"
                alt=""
                src="/vector-1-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-xs">
            <div className="w-[396px] relative leading-[150%] inline-block max-w-full">
              Link
            </div>
            <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[387px] pl-[15px] gap-[12px] border-[1px] border-solid border-borders mq750:pr-[193px] mq750:box-border mq450:pr-5 mq450:box-border">
              <Image
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/phlinkbold-2.svg"
              />
              <input
                className="w-[calc(100%_-_418px)] [border:none] [outline:none] font-heading-s text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-dark-grey text-left inline-block min-w-[154px] p-0"
                placeholder="https://www.github.com/benwright"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[376px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[148px] box-border gap-[24px] max-w-full text-xs mq750:pb-24 mq750:box-border mq450:h-auto">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full shrink-0">
          <div className="flex-1 rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center p-5 box-border gap-[12px] shrink-0 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-grey mq450:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="w-3 h-px relative bg-grey" />
                  <div className="w-3 h-px relative bg-grey" />
                </div>
                <b className="relative leading-[150%] inline-block min-w-[57px]">
                  Link #2
                </b>
              </div>
              <div className="relative leading-[150%] inline-block min-w-[61px]">
                Remove
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="w-[396px] relative leading-[150%] inline-block max-w-full">
                Platform
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-x-auto flex flex-row items-center justify-start py-2.5 px-[15px] gap-[12px] text-base border-[1px] border-solid border-borders">
                <Image
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/riyoutubefill-1.svg"
                />
                <div className="flex-1 relative leading-[150%]">YouTube</div>
                <Image
                  className="h-1.5 w-3 relative shrink-0"
                  alt=""
                  src="/vector-1-1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="w-[396px] relative leading-[150%] inline-block max-w-full">
                Link
              </div>
              <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[374px] pl-[15px] gap-[12px] border-[1px] border-solid border-borders mq750:pr-[187px] mq750:box-border mq450:pr-5 mq450:box-border">
                <Image
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/phlinkbold-2.svg"
                />
                <input
                  className="w-[calc(100%_-_405px)] [border:none] [outline:none] font-heading-s text-base bg-[transparent] h-6 flex-1 relative leading-[150%] text-dark-grey text-left inline-block min-w-[161px] p-0"
                  placeholder="https://www.youtube.com/benwright"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[184px] relative shrink-0 max-w-full text-base mq450:h-auto mq450:min-h-[184]">
          <div className="absolute top-[0px] left-[40px] rounded-xl bg-light-grey w-[728px] overflow-hidden flex flex-col items-center justify-center p-5 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-grey mq450:flex-wrap">
              <div className="h-6 w-[77px] flex flex-row items-center justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="w-3 h-px relative bg-grey" />
                  <div className="w-3 h-px relative bg-grey" />
                </div>
                <b className="self-stretch flex-1 relative leading-[150%]">
                  Link #3
                </b>
              </div>
              <div className="h-6 w-[61px] relative leading-[150%] inline-block">
                Remove
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-borders mq750:flex-wrap">
              <Image
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/mdilinkedin-1.svg"
              />
              <div className="h-6 flex-1 relative leading-[150%] inline-block min-w-[393px] max-w-full mq750:min-w-full">
                LinkedIn
              </div>
              <Image
                className="h-1.5 w-3 relative"
                alt=""
                src="/vector-1-3.svg"
              />
            </div>
            <div className="h-12 rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-3 pr-[482px] pl-[15px] gap-[12px] border-[1px] border-solid border-borders">
              <Image
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/phlinkbold-4.svg"
              />
              <div className="self-stretch w-[161px] relative leading-[150%] inline-block">
                github.com/elonmusk
              </div>
            </div>
          </div>
          <div className="absolute top-[5px] left-[0px] bg-borders w-[808px] h-px" />
        </div>
      </div>
    </div>
  );
};

export default LinkListContainer;
