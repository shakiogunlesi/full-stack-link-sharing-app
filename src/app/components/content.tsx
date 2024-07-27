import React from 'react';
import Image from 'next/image';

interface ContentProps {
  solarlinkCircleBold: string;
  phlinkBold: string;
  phuserCircleBold: string;
}

const Content: React.FC<ContentProps> = ({ solarlinkCircleBold, phlinkBold, phuserCircleBold }) => {
  return (
    <header className="flex flex-row items-center justify-between w-full">
      <Image src={solarlinkCircleBold} alt="Logo" className="h-10 w-10" />
      <div className="flex items-center gap-4">
        <Image src={phlinkBold} alt="Links" className="h-8 w-8" />
        <Image src={phuserCircleBold} alt="Profile" className="h-8 w-8" />
      </div>
    </header>
  );
};

export default Content;
