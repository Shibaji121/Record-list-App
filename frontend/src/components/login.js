import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    const instance = axios.create({
      baseURL: "http://localhost:8000",
    });
    instance.get(`/login?email=${email}`).then(function (response) {
      const id = response.data.data.User[0]._id;
      console.log(id);
      const pwd = response.data.data.User[0].password;
      if (pwd !== password) {
        alert("email or Password is wrong");
        return;
      }
      localStorage.setItem("userId", id);
      navigate("/homepage");
    });
  };

  return (
    <div className="profile-screen">
      <div className="profile-header">Login</div>
      <form className="register" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email ID"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
