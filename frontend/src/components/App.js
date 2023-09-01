import React from "react";

function App() {
  return (
    <div className="App">
      <div className="profile-screen">
        <div className="profile-header">Register</div>
        <form className="register">
          <input type="text" placeholder="User Name" required />
          <input type="email" placeholder="Email ID" required />
          <input type="password" placeholder="Password" required />
          <select name="gender">
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
