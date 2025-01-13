import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // Axios POST function
  const submitSignupData = async () => {
    console.log(user);
    setUser({
      username: "",
      password: "",
    });
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      navigate("/");
      toast.success("Login Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  // Form submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    submitSignupData();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-indigo-500 p-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back!
        </h2>
        <form onSubmit={onSubmit} className="space-y-5">
          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-gray-50 border-gray-300 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {/* Submit Button */}
          <div className="form-control mt-4">
            <button className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Login
            </button>
          </div>
        </form>

        {/* Already Have Account */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
