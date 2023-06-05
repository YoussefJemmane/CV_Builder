import { createContext, useReducer } from 'react'

export const ResumesContext = createContext()

export const ResumesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESUMES':
      return {
        resumes: action.payload
      }
    case 'CREATE_RESUME':
      return {
        resumes: [action.payload, ...state.resumes]
      }
    case 'DELETE_RESUME':
      return { ...state, resumes: state.resumes.filter((resume) => resume._id !== action.payload) };

    default:
      return state
  }
}

export const ResumesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ResumesReducer, {
    resumes: null
  })

  return (
    <ResumesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ResumesContext.Provider>
  )
}