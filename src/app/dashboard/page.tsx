import React from 'react';
import Image from 'next/image';
import teenyiconsgithubsolid from '/public/teenyiconsgithubsolid1.svg';
import mdiarrowright from '/public/mdiarrowright1.svg';
import subtract from '/public/preview-section.svg';
import solarlink from '/public/solarlinkcirclebold.svg';
import devlinkLogo from '/public/devlinks.svg';
import phlinkbold from '/public/phlinkbold.svg';
import phusercircle from '/public/phusercirclebold.svg';
import group273 from '/public/group-273.svg';



const dashboard = () => {
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
                        <div className="absolute top-[331.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
                        <div className="absolute top-[395.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
                        <div className="absolute top-[459.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
                        <div className="absolute top-[523.5px] left-[23.5px] rounded-lg bg-whitesmoke w-[237px] h-11 z-[2]" />
                </div>
            </div>
            <div className="sm:col-span-4 overflow-hidden">
                <div className="w-full rounded-xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-10 px-0 pb-6 box-border gap-[40px] leading-[normal] tracking-[normal] mq450:gap-[20px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-left text-13xl text-dark-grey font-heading-s">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                            <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
                                Customize your links
                            </h1>
                            <div className="self-stretch relative text-base leading-[150%] text-grey">
                                Add/edit/remove links below and then share all your profiles with
                                the world!
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-center text-13xl text-dark-grey font-heading-s">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
                            <button className="cursor-pointer py-[9px] px-5 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-center border-[1px] border-solid border-purple">
                                <div className="flex flex-row items-start justify-start">
                                <div className="relative text-base leading-[150%] font-semibold font-heading-s text-purple text-left inline-block min-w-[108px]">
                                    <a href="/dashboard-active">+ Add new link</a>
                                </div>
                                </div>
                            </button>
                            <div className="self-stretch rounded-xl bg-light-grey overflow-hidden flex flex-col items-center justify-center py-[62.5px] px-5 box-border max-w-full mq675:pt-[41px] mq675:pb-[41px] mq675:box-border">
                                <div className="self-stretch flex flex-col items-center justify-center gap-[40px] max-w-full mq675:gap-[20px]">
                                    <Image
                                        className="w-[249.5px] h-40 relative"
                                        loading="lazy"
                                        alt=""
                                        src={group273}
                                    />
                                    <div className="w-[488px] flex flex-col items-center justify-start gap-[24px] max-w-full">
                                        <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq750:text-7xl mq750:leading-[38px]">
                                        Let’s get you started
                                        </h1>
                                        <div className="self-stretch relative text-base leading-[150%] text-grey">
                                        Use the “Add new link” button to get started. Once you have
                                        more than one link, you can reorder and edit them. We’re here
                                        to help you share your profiles with everyone!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="self-stretch flex flex-col items-end justify-start gap-[24px]">
                        <div className="self-stretch h-px relative bg-borders" />
                        <div className="flex flex-row items-start justify-end py-0 px-10">
                            <button className="cursor-pointer [border:none] py-[11px] px-[27px] bg-purple rounded-lg flex flex-row items-start justify-start opacity-[0.25] hover:bg-mediumslateblue">
                                <div className="relative text-base leading-[150%] font-semibold font-heading-s text-white text-left inline-block min-w-[37px]">
                                Save
                                </div>
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        
        
    </main>
  );
};

export default dashboard;
