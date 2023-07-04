import { AuthSession } from "@/libs/AuthedSession"

export default async function Page() {
  const session = await AuthSession();
  console.log(session)
  return (
    <h1>Profil {session?.user?.email}</h1>
  )
}