import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.jpg";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen bg-pink-100">
      {/* <div>
        <h1 className="p-12 font-medium text-2xl ">Wants to Plant More</h1>
      </div> */}
      <div className="flex md:flex-row flex-col justify-around ">
        <div className="h-full w-1/2">
          <h1 className="bg-gray-400 text-center py-2 font-medium text-2xl my-8 ml-4">
            Wants to Plant More
          </h1>{" "}
          <img
            className="mx-auto max-w-xs max-h-96 rounded-full cursor-pointer h-80 w-80"
            src={login}
            alt="dfsd"
          />
        </div>
        <div className="h-screen w-1/2 bg-gray-400 p-20">
          <h2 className="text-2xl text-center pb-2 bg-pink-100 -ml-20">
            Welcome to Family
          </h2>{" "}
          <div className="py-6">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={
                "w-full bg-pink-100 p-2 text-primary  transition duration-150 ease-in-out mb-4"
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                "w-full bg-pink-100  p-2 text-primary transition duration-150 ease-in-out mb-4"
              }
            />
          </div>
          <div className="flex justify-center item-center">
            <button
              id="signup"
              type="submit"
              className={
                "my-4 py-1 px-4 text-white rounded bg-gray-700 hover:bg-pink-100 hover:text-gray-900  active:border-black"
              }
            >
              Login
            </button>
          </div>{" "}
          <div className="py-2 flex justify-center item-center">
            <h2>
              Don't have an account ?
              <Link
                to="/signup"
                className="text-gray-900  hover:text-pink-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                SignUp
              </Link>
            </h2>
          </div>
          <div className="flex justify-center item-center">
            <Link
              to="/resetpassword"
              className="text-gray-900   hover:text-pink-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Forget Password ?
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
