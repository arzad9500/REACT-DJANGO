import { useContext } from 'react'
import { AuthContext } from './components/AuthProvider'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const {isLoggedin} = useContext(AuthContext)

  return isLoggedin ? (children)
   : (
    <Navigate to="/login" />
  )
}

