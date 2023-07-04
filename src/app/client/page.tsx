"use client"

import { useSession } from 'next-auth/react'

export default function Page() {
  const { data: session, status } = useSession();

  console.log(status, session)
  
  return (
    <h1>Client {session?.user?.email}</h1>
  )
}