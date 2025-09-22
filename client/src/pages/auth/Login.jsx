import React from "react";
import Google from "../../components/Google";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex h-screen flex-col bg-bg md:items-center">
      <div className="p-10 md:py-8 md:p-0 flex flex-col gap-2">
        <h2 className="text-4xl font-bold">Welcome Back,</h2>
        <p className="text-lg">Log in to your account</p>
      </div>

      <div className="bg-bg-200 w-full md:w-xlg h-xxlg rounded-tl-[45px] rounded-tr-[45px] md:rounded-tl-[30px] md:rounded-tr-[30px] drop-shadow-lg p-4 py-8 items-center flex flex-col gap-8 md:gap-7">
        <Google title={"Login with Google"} />

        <div className="flex items-center justify-center gap-2">
          <div className="w-32 h-[1px] bg-text"></div>
          <p className="text-lg">or</p>
          <div className="w-32 h-[1px] bg-text"></div>
        </div>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col w-80 gap-2">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="ahmedPro" className="w-full h-14 rounded-lg pl-4 outline-none text-lg"/>
          </div>
          <div className="flex flex-col w-80 gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="******" className="w-full h-14 rounded-lg pl-4 outline-none text-lg"/>
          </div>

          <button className="w-80 h-14 bg-primary text-white text-xl rounded-lg">Login</button>
        </form>
        <p>Don't have an account? <Link className="text-primary font-bold" to={"/signup"}>Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;
