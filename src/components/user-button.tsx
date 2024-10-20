'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useCurrentUser } from '@/hooks/use-current-user';
import { Loader, LogOut } from 'lucide-react';
import { useAuthActions } from '@convex-dev/auth/react';

export default function UserButton() {
  const { signOut } = useAuthActions();
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className='size-4 animate-spin text-muted-foreground' />;
  }

  if (!data) {
    return null;
  }

  const { image, name, email } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className='outline-none relative'>
        <Avatar className='size-10 hover:opacity-75 transition'>
          <AvatarImage alt={name} src={image} />
          <AvatarFallback className='bg-sky-500 text-white'>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='W-60' align='center' side='right'>
        <DropdownMenuItem onClick={()=> signOut()} className='h-10'>
          <LogOut className='size-4 mr-2' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
