import { useAuthContext } from './useAuthContext'
import { useResumesContext } from './useResumesContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchResumes } = useResumesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    dispatchResumes({ type: 'SET_RESUMES', payload: null })
  }

  return { logout }
}