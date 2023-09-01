import React from "react";

export default function Login() {
  return (
    <div className="profile-screen">
      <div className="profile-header">Login</div>
      <form className="register">
        <input type="email" placeholder="Email ID" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
