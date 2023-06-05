import { ResumesContext } from '../context/ResumesContext'
import { useContext } from 'react'

export const useResumesContext = () => {
  const context = useContext(ResumesContext)

  if (!context) {
    throw Error('useResumesContext must be used inside an ResumesContextProvider')
  }

  return context
}