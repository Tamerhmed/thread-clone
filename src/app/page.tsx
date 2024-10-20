'use client';

import { AuthScreen } from '@/components/auth/auth-screen';
import { Button } from '@/components/ui/button';
import UserButton from '@/components/user-button';
import { useAuthActions } from '@convex-dev/auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  return (
    <div className='h-full'>
      <UserButton />
    </div>
  );
}
