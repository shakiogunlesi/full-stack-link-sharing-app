import type { NextPage } from 'next';
import FrameComponent3 from '../create-account/page';
import React from 'react';

const CreateAccount: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-light-grey">
      <FrameComponent3 />
      <h1>Hello everyone</h1>
    </div>
  );
};

export default CreateAccount;

