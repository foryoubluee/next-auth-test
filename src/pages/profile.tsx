import { useSession, signIn } from 'next-auth/react'
import React from 'react'

const Profile = () => {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <div className="p-6">
          <h1>Name: {session?.user?.name}</h1>
          <h1>Email: {session?.user?.email}</h1>
          <h1>Image: {session?.user?.image}</h1>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      )}
    </div>
  )
}

export default Profile
