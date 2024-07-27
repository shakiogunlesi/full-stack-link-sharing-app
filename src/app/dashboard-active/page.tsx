"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import solarlink from '/public/solarlinkcirclebold.svg';
import devlinkLogo from '/public/devlinks.svg';
import phlinkbold from '/public/phlinkbold.svg';
import phusercircle from '/public/phusercirclebold.svg';
import teenyiconsgithub from '/public/teenyicons_github-solid.svg';
import teenyiconsgit from '/public/teenyiconsgithubsolid.svg';
import vector2 from '/public/vector-1-1.svg';
import mdiarrowright from '/public/mdiarrowright1.svg';
import subtract from '/public/preview-section.svg';

const Onboard = () => {
  const [links, setLinks] = useState([{ platform: 'GitHub', url: 'https://github.com/elonmusk' }]);
  const [newLink, setNewLink] = useState({ platform: '', url: '' });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleAddLink = () => {
    if (newLink.platform && newLink.url) {
      setLinks([...links, newLink]);
      setNewLink({ platform: '', url: '' });
    }
  };

  const handleEditLink = (index: number) => {
    setNewLink(links[index]);
    setEditIndex(index);
  };

  const handleUpdateLink = () => {
    if (newLink.platform && newLink.url && editIndex !== null) {
      const updatedLinks = links.map((link, index) => (index === editIndex ? newLink : link));
      setLinks(updatedLinks);
      setNewLink({ platform: '', url: '' });
      setEditIndex(null);
    }
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='bg-gray-50 dark:bg-gray-900 gap-4 mx-auto px-6 py-6 lg:py-0'>
      <header className="bg-white w-full flex flex-row overflow-hidden items-start justify-between leading-normal tracking-normal gap-5 text-left text-base text-grey font-heading-s mq625:flex-wrap p-3 rounded-md">
        <div className="flex items-center gap-2">
          <Image className="h-8 w-8" loading="lazy" alt="Solarlink" src={solarlink} />
          <Image className="h-5" loading="lazy" alt="Devlinks Logo" src={devlinkLogo} />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-light-purple text-purple font-semibold rounded-lg p-3">
            <Image className="w-5 h-5" alt="Links Icon" src={phlinkbold} />
            Links
          </button>
          <div className="flex items-center gap-2 rounded-lg p-3">
            <Image className="w-5 h-5" loading="lazy" alt="Profile Icon" src={phusercircle} />
            Profile Details
          </div>
        </div>
        <button className="flex items-center gap-2 bg-transparent border border-purple rounded-lg p-3">
          <div className="text-purple font-semibold">
            Preview
          </div>
        </button>
      </header>

      <div className="grid grid-flow-row sm:grid-flow-col gap-6 mt-4">
        <div className="bg-white p-6 sm:col-span-1 overflow-hidden">
          <div className="relative">
            <Image className="w-[285px] h-auto" alt="Preview" src={subtract} />
            <div className="absolute top-12 left-24 rounded-full bg-whitesmoke w-24 h-24" />
            <div className="absolute top-96 left-24 bg-black text-white rounded-lg p-2 flex items-center gap-2">
              <Image className="w-4 h-4" alt="GitHub Icon" src={teenyiconsgithub} />
              GitHub
              <Image className="w-4 h-4" alt="Arrow Icon" src={mdiarrowright} />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4 bg-white p-6 overflow-hidden">
          <div className="w-full overflow-hidden flex flex-col items-start justify-start pt-10 px-10 pb-[21px] box-border gap-[40px] leading-[normal] tracking-[normal] mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-13xl text-dark-grey font-body-m"> 
              <h1 className="m-0 self-stretch relative text-inherit leading-[150%] font-bold font-inherit mq450:text-[19px] mq450:leading-[29px] mq750:text-[26px] mq750:leading-[38px]">
                Customize your links
              </h1>
              <div className="self-stretch relative text-base leading-[150%] text-grey">
                <p>Add, edit, or remove links below and then share all your profiles with the world!</p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-base text-dark-grey font-body-m">
              <button className="border border-purple bg-transparent self-stretch text-purple font-semibold rounded-lg px-5 py-2 mb-4" onClick={handleAddLink}>
                + Add new link
              </button>
            </div>
            {links.map((link, index) => (
              <div key={index} className="bg-light-grey self-stretch rounded-xl p-4 mb-4">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-grey w-2 h-px"></div>
                    <b>Link #{index + 1}</b>
                  </div>
                  <span className="cursor-pointer" onClick={() => handleRemoveLink(index)}>Remove</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Image className="h-4 w-4" alt="Platform Icon" src={teenyiconsgit} />
                  <span className="flex-grow">{link.platform}</span>
                  <span className="cursor-pointer text-blue-600" onClick={() => handleEditLink(index)}>Edit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image className="h-4 w-4" alt="Link Icon" src={phlinkbold} />
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                </div>
              </div>
            ))}

            <div ref={ref} className="self-stretch">
              <div className="mb-4">
                <label>Platform</label>
                <div className="flex items-center gap-2 bg-white border p-2 rounded-lg">
                  <Image className="h-4 w-4" alt="GitHub Icon" src={teenyiconsgithub} />
                  <input className="flex-grow bg-transparent outline-none" value={newLink.platform} onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })} />
                  <Image className="h-1.5 w-3" alt="Dropdown Icon" src={vector2} />
                </div>
              </div>
              <div className="mb-4 self-stretch">
                <label>Link</label>
                <div className="flex items-center gap-2 bg-white border p-2 rounded-lg">
                  <Image className="h-4 w-4" alt="Link Icon" src={phlinkbold} />
                  <input className="flex-grow bg-transparent outline-none" value={newLink.url} onChange={(e) => setNewLink({ ...newLink, url: e.target.value })} />
                </div>
              </div>

              {editIndex !== null ? (
                <button className="bg-purple text-white font-semibold rounded-lg px-5 py-2" onClick={handleUpdateLink}>
                  Update Link
                </button>
              ) : (
                <button className="bg-purple text-white font-semibold rounded-lg px-5 py-2" onClick={handleAddLink}>
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Onboard;
