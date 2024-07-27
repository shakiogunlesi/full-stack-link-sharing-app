import React from 'react';
import Image from 'next/image';
import teenyiconsgithubsolid from '/public/teenyiconsgithubsolid1.svg';
import mdiarrowright from '/public/mdiarrowright1.svg';
import subtract from '/public/preview-section.svg';
import solarlink from '/public/solarlinkcirclebold.svg';
import devlinkLogo from '/public/devlinks.svg';
import phlinkbold from '/public/phlinkbold.svg';
import phusercircle from '/public/phusercirclebold.svg';
import teenyiconsgithub from '/public/teenyicons_github-solid.svg';
import teenyiconsgit from '/public/teenyiconsgithubsolid.svg';
import vector2 from '/public/vector-1-1.svg';
import youtube from '/public/ri_youtube-fill.svg';
import linkedin from '/public/linkedin.svg';







const OnboardActive = () => {
  return (
    <main className='bg-gray-50 dark:bg-gray-900 gap-4 mx-auto px-6 py-6 lg:py-0'>
        <header className="bg-white w-full flex flex-row overflow-hidden items-start justify-between leading-[normal] tracking-[normal] gap-[20px] text-left text-base text-grey font-heading-s mq625:flex-wrap p-3 rounded-md">
            <div className="w-[146px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
                    <Image
                        className="h-8 w-8 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={solarlink}
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                        <Image
                        className="self-stretch h-[21px] relative max-w-full overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={devlinkLogo}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] max-w-full">
                <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-light-purple rounded-lg flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <Image
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                        src={phlinkbold}
                        />
                    </div>
                    <div className="relative text-base leading-[150%] font-semibold font-heading-s text-purple text-left inline-block min-w-[40px]">
                        Links
                    </div>
                </button>
                <div className="rounded-lg flex flex-row items-start justify-start py-[11px] px-[27px] gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <Image
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={phusercircle}
                        />
                    </div>
                    <div className="relative leading-[150%] font-semibold inline-block min-w-[105px]">
                        Profile Details
                    </div>
                </div>
            </div>
            <button className="cursor-pointer py-[9px] px-[26px] bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-purple">
                <div className="flex flex-row items-start justify-start">
                    <div className="relative text-base leading-[150%] font-semibold font-heading-s text-purple text-left inline-block min-w-[60px]">
                        Preview
                    </div>
                </div>
            </button>
        </header>
        <div className="grid grid-flow-row sm:grid-flow-col gap-6 mt-4">
            <div className="bg-white  sm:col-span-1 pt-16 overflow-hidden">
                
                <div className="!m-[0] bottom-[0px] flex justify-center">
                    <Image
                        className="relatives h-[631px] w-[307px] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-[400px] overflow-hidden max-h-full z-[1]"
                        alt=""
                        src={subtract}
                    />
                    <div className="absolute top-[53.5px] left-[94px] rounded-[50%] bg-whitesmoke w-24 h-24 z-[2]" />
                    <div className="flex flex-row items-start justify-start py-[13px] px-4 gap-[8px] absolute top-[427px] left-[95px] rounded-lg bg-black w-[237px] h-11 z-[2]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <Image
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={teenyiconsgithubsolid}
                            />
                        </div>
                        <div className="flex-1 relative leading-[130%] text-white">GitHub</div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <Image
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={mdiarrowright}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[13px] px-4 gap-[8px] absolute top-[490px] left-[95px] rounded-lg bg-[#EE3939] w-[237px] h-11 z-[2]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <Image
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={youtube}
                            />
                        </div>
                        <div className="flex-1 relative leading-[120%] text-white">YouTube</div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <Image
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={mdiarrowright}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[13px] px-4 gap-[8px] absolute top-[555px] left-[95px] rounded-lg bg-[#2D68FF] w-[237px] h-11 z-[2]">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <Image
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={linkedin}
                            />
                        </div>
                        <div className="flex-1 relative leading-[120%] text-white">LinkedIn</div>
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <Image
                            className="w-4 h-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={mdiarrowright}
                            />
                        </div>
                    </div>
                    <div className="absolute top-[523.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
                </div>
            </div>
            <div className="sm:col-span-4 overflow-hidden bg-white">
                <div className="w-full overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-[21px] box-border gap-[40px] leading-[normal] tracking-[normal] mq450:gap-[20px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-13xl text-dark-grey font-body-m">
                        <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-[19px] mq450:leading-[29px] mq750:text-[26px] mq750:leading-[38px]">
                        Customize your links
                        </h1>
                        <div className="self-stretch relative text-base leading-[150%] text-grey">
                        Add/edit/remove links below and then share all your profiles with the
                        world!
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-base text-dark-grey font-body-m">
                        <button className="cursor-pointer py-[9px] px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-center border-[1px] border-solid border-purple">
                        <div className="flex flex-row items-start justify-start">
                            <div className="relative text-base leading-[150%] font-semibold font-body-m text-purple text-left inline-block min-w-[108px]">
                            + Add new link
                            </div>
                        </div>
                        </button>
                        <div className="self-stretch rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center p-5 box-border gap-[12px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-grey mq450:flex-wrap mq450:justify-center">
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
                                src={teenyiconsgit}
                                />
                                <div className="flex-1 relative leading-[150%]">GitHub</div>
                                <Image
                                className="h-1.5 w-3 relative shrink-0"
                                alt=""
                                src={teenyiconsgithub}
                                />
                            </div>
                            <div className="self-stretch rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-start py-2.5 px-4 gap-[12px] border-[1px] border-solid border-borders">
                                <Image
                                className="h-4 w-4 relative overflow-hidden shrink-0"
                                alt=""
                                src={phlinkbold}
                                />
                                <a
                                className="relative leading-[150%] text-[inherit] [text-decoration:none]"
                                href="https://www."
                                target="_blank"
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
                                    src={teenyiconsgithub}
                                />
                                <div className="flex-1 relative leading-[150%]">GitHub</div>
                                <Image
                                    className="h-1.5 w-3 relative shrink-0"
                                    alt=""
                                    src={vector2}
                                />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-xs">
                                <div className="w-[396px] relative leading-[150%] inline-block max-w-full">
                                Link
                                </div>
                                <footer className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[325px] pl-[15px] gap-[12px] text-left text-base text-darkslategray font-body-m border-[1px] border-solid border-borders mq450:pr-5 mq450:box-border mq750:pr-[162px] mq750:box-border">
                                <Image
                                    className="h-4 w-4 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={phlinkbold}
                                />
                                <div className="relative leading-[150%]">
                                    e.g. https://www.github.com/johnappleseed
                                </div>
                                </footer>
                            </div>
                        </div>
                        <div className="self-stretch rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center p-5 box-border gap-[12px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-grey mq450:flex-wrap mq450:justify-center">
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
                                src={teenyiconsgit}
                                />
                                <div className="flex-1 relative leading-[150%]">GitHub</div>
                                <Image
                                className="h-1.5 w-3 relative shrink-0"
                                alt=""
                                src={teenyiconsgithub}
                                />
                            </div>
                            <div className="self-stretch rounded-lg bg-white overflow-hidden hidden flex-row items-center justify-start py-2.5 px-4 gap-[12px] border-[1px] border-solid border-borders">
                                <Image
                                className="h-4 w-4 relative overflow-hidden shrink-0"
                                alt=""
                                src={phlinkbold}
                                />
                                <a
                                className="relative leading-[150%] text-[inherit] [text-decoration:none]"
                                href="https://www."
                                target="_blank"
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
                                    src={teenyiconsgithub}
                                />
                                <div className="flex-1 relative leading-[150%]">GitHub</div>
                                <Image
                                    className="h-1.5 w-3 relative shrink-0"
                                    alt=""
                                    src={vector2}
                                />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-xs">
                                <div className="w-[396px] relative leading-[150%] inline-block max-w-full">
                                Link
                                </div>
                                <footer className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[325px] pl-[15px] gap-[12px] text-left text-base text-darkslategray font-body-m border-[1px] border-solid border-borders mq450:pr-5 mq450:box-border mq750:pr-[162px] mq750:box-border">
                                <Image
                                    className="h-4 w-4 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={phlinkbold}
                                />
                                <div className="relative leading-[150%]">
                                    e.g. https://www.github.com/johnappleseed
                                </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-[94px] box-border leading-[normal] tracking-[normal]">
                    <div className="self-stretch h-px relative bg-borders" />
                    <section className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-end py-6 px-10 box-border h-full">
                        <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple rounded-lg flex flex-row items-start justify-start hover:bg-mediumslateblue">
                        <div className="relative text-base leading-[150%] font-semibold font-heading-s text-white text-left inline-block min-w-[37px]">
                            Save
                        </div>
                        </button>
                    </section>
                </div>
            </div>
        </div>
        
        
    </main>
  );
};

export default OnboardActive;
