"use client";

import React, { useState } from "react";
import { User } from "../data";

const UserForm = () => {
  const [user, setUser] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user),
      });

      if (res.status === 201) {
        setUser({ name: "", email: "", password: "" });
        alert("User inserted successfully");
      } else alert("This email has already taken");
    } catch (error) {
      alert("Error: Failed to create user");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => handleData(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => handleData(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => handleData(e)}
          />
        </div>
        <button type="submit" disabled={!user}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
