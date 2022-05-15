import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { AuthContext } from '../../routes'
import googleImgUrl from '../../assets/google-icon.svg'

export function Login() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useContext(AuthContext)!

  async function handleLogin() {
    try {
      const { user } = await signInWithPopup(auth, provider)
      
      const tokenId = await user.getIdToken()
      
      if (tokenId) {
        localStorage.setItem('token', tokenId)
      }

      setAuthenticated(true)
      navigate('/home')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (authenticated) {
      navigate('/home')
    }
  }, [])

  return (
    <div
      className="
        w-full
        h-screen
        bg-brand-500
        text-white
        pt-56
        flex
        flex-col
        items-center
      "
    >
      <div className="inline">
        <h1 className="text-5xl mb-10">
          Bem-vindo ao FeedGet!
        </h1>

        <h2 className="text-2xl">
          Faça login para acessar a página
        </h2>
      </div>

      <button
        onClick={handleLogin}
        className="
          mt-16
          rounded-md
          py-4
          px-6
          bg-zinc-100
          hover:bg-white
          text-zinc-800
          transition-colors
          flex
          items-center
          justify-center
        "
      >
        <img
          src={googleImgUrl}
          alt="Logo da Google"
          width={32}
        />

        <span className="text-lg ml-2">
          Login with Google
        </span>
      </button>
    </div>
  )
}