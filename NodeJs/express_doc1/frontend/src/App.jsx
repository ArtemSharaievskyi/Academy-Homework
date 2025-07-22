import Login from "../auth/Login.jsx";
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    navigate('./login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    if (token) {
      axios.get('http://localhost:5000/api/auth/checkToken').catch((err) => {
        if (err.response?.status === 401) {
          logout()
        } 
      })
    } else {
      logout()
    }
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App