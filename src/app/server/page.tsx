import { AuthSession } from "@/libs/AuthedSession"
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await AuthSession();
  
  if(!session) {
    redirect(`/api/auth/signin?callbackUrl=/server`)
  }

  return (
    <h1>Profil {session?.user?.email}</h1>
  )
}