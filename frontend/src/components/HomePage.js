import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId === null) {
      navigate("/");
      return;
    }
    const instance = axios.create({
      baseURL: "http://localhost:8000",
    });
    instance.get(`/${userId}`).then(function (response) {
      setUserName(response.data.data.User.name);
    });
  });

  return (
    <div>
      <h1>Hello {userName}</h1>
    </div>
  );
}
