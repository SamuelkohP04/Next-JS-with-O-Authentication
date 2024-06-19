// logout.tsx
'use client';

import { signOut } from 'next-auth/react';

export default function Logout({ children }: { children?: React.ReactNode }) {
  return (
    <span onClick={() => signOut()}>
      {children || 'Logout'}
    </span>
  );
}
