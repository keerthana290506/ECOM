import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="mt-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mb-2"/>
          <input type="password" placeholder="Password" className="w-full p-2 border rounded-md mb-4"/>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
