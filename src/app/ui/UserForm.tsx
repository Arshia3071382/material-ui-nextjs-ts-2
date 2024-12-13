"use client";

import React, { use, useState } from "react";
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

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(JSON.stringify(user));

    // const res = await fetch("http://localhost:3000/api/users", {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // console.log(res);
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
