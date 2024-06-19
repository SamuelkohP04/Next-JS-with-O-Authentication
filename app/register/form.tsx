"use client";

import React from "react";

const RegisterForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({ response });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mx-auto max-w-md mt-10">
      <input
        className="border border-black text-black"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="border border-black text-black"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit" className="border border-black">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;