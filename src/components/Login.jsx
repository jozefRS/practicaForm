import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser || storedUser.email !== email || storedUser.pass !== password) {
            setError('Correo o contraseña incorrectos');
            return;
        }

        navigate('/dashboard');
    }

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Correo Electrónico" className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Contraseña" className="form-control mb-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn btn-success">Ingresar</button>
            </form>
        </div>
    );
}
