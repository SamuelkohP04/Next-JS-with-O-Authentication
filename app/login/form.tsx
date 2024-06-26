"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // updated import for useRouter
import React from "react";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: false,
    });

    console.log({ response });  
    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
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
        Login
      </button>
    </form>
  );
}
