import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => {

  const { isAuthenticated} = useAuth()
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate replace to="/login" />
        )
      }
    />
  )
}


export default PrivateRoute