import React from 'react';

export default function RegisterPage() {
  return (
    <form className="flex flex-col gap-2">
      <input className="border" type="email" placeholder="Email" />
      <input className="border" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
