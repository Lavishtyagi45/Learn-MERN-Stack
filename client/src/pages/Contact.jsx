import { useState } from "react";

export default function Contact() {
    const [user, setUser]=useState({
        username:"",
        email:"",
        message:"",
    })
    
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(user);
        try{
          const response= await fetch(`http://localhost:5000/api/form/contact`,{
            method:"POST",
            headers:{"Content-Type":"application/json",},
            body:JSON.stringify(user),
          })
          if(response.ok){
            const responseData=await response.json();
            alert("Message sent successfully");
            setUser({
              username:"",
              email:"",
              message:"",
            })
            console.log(responseData);
          }
        }catch(error){
          console.log("Contact",error);
        }
    };
  return (
    <form className="flex flex-col p-4 gap-4" onSubmit={handleSubmit}>
      <fieldset className="border p-4 rounded-lg">
        <legend className="p-4 text-xl font-bold">Contact Us</legend>
        <div className="flex flex-col gap-4">
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInput}
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            placeholder="Enter your Name"
            required
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            value={user.message}
            onChange={handleInput}
            className="border p-2 rounded shadow focus:outline-none focus:border-blue-500"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 border border-black rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-4"
        >
          Send
        </button>
      </fieldset>
    </form>
  );
}
