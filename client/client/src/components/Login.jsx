import React from "react";
import { useState } from "react";
import axios from "axios";
import authenticate from "../services/authorize";
import { useNavigate } from "react-router";
import loginImg from '../assets/pexels-ella-olsson-1640777.jpg'

const Login = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    //console.log(import.meta.env.VITE_REACT_API)
    axios
      .post(`${import.meta.env.VITE_REACT_API}/login`, { username, password })
      .then((response) => {
        authenticate(response, () => navigate("/home"));
        console.log(history);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen w-full gap-2">
      <div className="bg-white flex flex-col justify-center">
        <form
          onSubmit={submitFrom}
          action=""
          className=" max-w-[400px] mx-auto p-8 px-8 min-w-fit"
        >
          <h2 className="text-4xl font bold text-center m-3 text-main_orange">
            LOGO
          </h2>
          <div className="flex flex-col py-2 border-b border-main_orange m-2">
            <label htmlFor="">Username</label>
            <input
              value={username}
              onChange={inputValue("username")}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2 border-b border-main_orange m-2">
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={inputValue("password")}
              type="password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          <div className="flex justify-between py-2 text-sm">
            <p className="flex items-center text-xs">
              <input
                className=" ml-2 mr-1 inline-block"
                type="checkbox"
                name=""
                id=""
              />
              Remember Me
            </p>
            <p className="text-xs">Forget Password</p>
          </div>
          <div className="container px-10  grid place-items-center">
            <button className=" w-24 h-8  my-5 py2 border border-main_orange rounded-full  text-main_orange hover:bg-main_orange/20 ">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="bg-gray-200 hidden lg:block col-span-2">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
        <h1 class="absolute text-5xl text-white top-1/2 right-1 -translate-x-1/2 -translate-y-1/2">
        Quote Quote Quote </h1>
      </div>
    </div>
  );
};

export default Login;
