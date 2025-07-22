import {useNavigate} from 'react-router-dom';

export const useAuth = () => {
    const navigate = useNavigate();

    const login = (token) =>{
        localStorage.setItem('token', token);
        navigate('/');
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const isAuthenticated = !!localStorage.getItem('token');

    return {login, logout, isAuthenticated}
}