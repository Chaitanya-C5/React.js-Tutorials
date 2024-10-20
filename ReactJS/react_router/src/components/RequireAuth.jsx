/* eslint-disable react/prop-types */
import { useAuth } from './Auth';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();
    if(!auth.user){
        return <Navigate to='/login' state={{path: location.pathname}}/>
    }
  return (
    <div>{children}</div>
  )
}

export default RequireAuth