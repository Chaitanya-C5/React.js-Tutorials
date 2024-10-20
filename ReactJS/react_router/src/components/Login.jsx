import { useState } from 'react';
import { useAuth } from './Auth';
import { useNavigate, useLocation } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || '/';
  console.log(redirectPath);
  const handleLogin = () => {
    auth.login(username);
    navigate(redirectPath, {replace: true});
  }
  return (
    <div>
        <h1> Login  </h1>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login