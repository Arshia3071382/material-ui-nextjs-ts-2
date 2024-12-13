"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { User } from "../data";

const UserForm = () => {
  const [user, setUser] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(user),
      });
      alert("User Inserted Successfully.");
      setTimeout(() => router.push("/"), 1500);
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
            onChange={(e) => handleData(e)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            onChange={(e) => handleData(e)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            required
            type="password"
            name="password"
            onChange={(e) => handleData(e)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
