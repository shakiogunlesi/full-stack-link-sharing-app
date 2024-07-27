import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">Welcome to Link-Sharing App</h1>
      <div className="mt-6">
        <Link href="/login">
          <a className="text-purple">Login</a>
        </Link>
        <span> | </span>
        <Link href="/create-account">
          <a className="text-purple">Create Account</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;

