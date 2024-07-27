import type { NextPage } from 'next';
import FrameComponent4 from '../login/page';
import React from 'react';

const Login: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-light-grey">
      <FrameComponent4 />
    </div>
  );
};

export default Login;
