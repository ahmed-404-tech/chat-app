import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-8">
      <img width={200} src="/images/logo.png" alt="" />

      <h2 className="text-3xl font-bold text-center">Welcome to ChatApp</h2>
      <p className="text-xl max-w-96 text-center">
        Connect easily, share your thoughts, and stay in touch with friends
        anytime, anywhere. 🚀
      </p>

      <Link
        to={"/signup"}
        className="w-80 md:w-96 h-16 md:h-12 rounded-md bg-primary text-white flex justify-center items-center text-xl"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Welcome;
