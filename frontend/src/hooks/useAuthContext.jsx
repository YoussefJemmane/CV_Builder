import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  // In useAuthContext function
const context = useContext(AuthContext);

  if(!context) {
    throw Error(`useAuthContext must be used inside an AuthContextProvider, ${context}`)
  }

  return context
}