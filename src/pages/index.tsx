import { NextPage } from 'next'
import { useSession, signIn } from 'next-auth/react'
import UserLayout from '../layouts/userLayout'

const Home: NextPage = () => {
  const { data: session } = useSession()
  return (
    <UserLayout>
      {session ? (
        <h1>Hello {session?.user?.name}</h1>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </UserLayout>
  )
}

export default Home
