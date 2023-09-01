import React, { useState } from "react";
import axios from "axios";

function App() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Select");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(uname, email, password, gender);
    const instance = axios.create({
      baseURL: "http://localhost:8000", // Replace with your desired domain name
    });
    instance
      .post("/create", {
        User: {
          name: uname,
          email: email,
          password: password,
          gender: gender,
        },
      })
      .then(function (response) {
        const id = response.data.data.User._id;
        console.log(id);
        localStorage.setItem("userId", id);
      });
  };
  return (
    <div className="App">
      <div className="profile-screen">
        <div className="profile-header">Register</div>
        <form className="register" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="User Name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <select
            name="gender"
            placeholder="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <a href="/login">Already a Member?</a>
      </div>
    </div>
  );
}

export default App;
