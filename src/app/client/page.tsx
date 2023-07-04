"use client"

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { themeChange } from 'theme-change'
themeChange()

export default function Page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/api/auth/signin?callbackUrl=/client`);
    }
  });
  
  return (
    <>
      <h1>Client {session?.user?.email}</h1>
    </>
  )
}