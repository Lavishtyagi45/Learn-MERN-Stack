import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL="http://localhost:5000/api/auth/register";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate=useNavigate();
  const {storetokenInLS}=useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("register",response);
      if(response.ok){
        alert("Registration Successful");
        const responseData=await response.json();
        storetokenInLS(responseData.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        console.log(responseData);
        navigate("/login");
      }
      else{
        console.log("error inside response","error");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
      <fieldset className="border p-4 rounded-lg">
        <legend className="text-xl font-bold">Registration Form</legend>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="py-2">
            Username:
          </label>
          <input
            type="text"
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            name="username"
            value={user.username}
            onChange={handleInput}
            autoComplete="off"
            placeholder="Enter your Name"
            required
          />
          <label htmlFor="email" className="py-2">
            Email:
          </label>
          <input
            type="email"
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            name="email"
            value={user.email}
            onChange={handleInput}
            autoComplete="off"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="phone" className="py-2">
            Phone:
          </label>
          <input
            type="text"
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            name="phone"
            value={user.phone}
            onChange={handleInput}
            autoComplete="off"
            placeholder="Enter your Phone Number"
            required
          />
          <label htmlFor="password" className="py-2">
            Password:
          </label>
          <input
            type="password"
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            name="password"
            value={user.password}
            onChange={handleInput}
            autoComplete="off"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 border border-black rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4"
        >
          Register Now
        </button>
      </fieldset>
    </form>
  );
}