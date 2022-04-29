import { createContext, useReducer } from 'react'

const INITIAL_VALUE = {
  name: '',
  email: '',
  token: '',
  logged: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const UserContext = createContext(INITIAL_VALUE)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE)

  function setData(data) {
    dispatch({ type: 'SET_DATA', data })
  }

  function isLogged() {
    return state.logged
  }

  return (
    <UserContext.Provider value={{ user: { ...state }, setData, isLogged }}>
      {children}
    </UserContext.Provider>
  )
}
