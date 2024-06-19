import React, {FormEvent} from 'react';
import Form from './form';

export default async function RegisterPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response);
  };

  return <Form />;
}