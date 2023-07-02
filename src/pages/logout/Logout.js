import { useEffect } from "react"
import { useNavigate } from "react-router";

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }, [])
    return (
        <p>Logging out</p>
    )
}