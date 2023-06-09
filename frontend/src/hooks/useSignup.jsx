import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (name, email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://127.0.0.1:3000/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json()

  }

  return { signup, isLoading, error }
}