import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL="http://localhost:5000/api/auth/login";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const {name,value} = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();
  const {storetokenInLS}= useAuth();


  const handleSubmit = async(e) => {
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
      console.log("login",response);
      if(response.ok){
        alert("Login Successfully");
        const responseData= await response.json();
        storetokenInLS(responseData.token);
        setUser({
          email:"",
          password:"",
        });
        navigate("/");
      }else{
        alert("invalid credentials");
        console.log("invalid credentials");
      }
    } catch (error) {
      console.log("login", error);
    }
  };

  return (
    <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
      <fieldset className="border p-4 rounded-lg">
        <legend className="text-xl font-bold">Login Form</legend>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            autoComplete="off"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            autoComplete="off"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 border border-black rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4"
        >
          Sign in
        </button>
      </fieldset>
    </form>
  );
}
