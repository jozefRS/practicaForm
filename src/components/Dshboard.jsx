import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser) {
            navigate('/login'); 
        } else {
            setUser(storedUser);
        }
    }, [navigate]);

    if (!user) return <p>Cargando...</p>;

    return (
        <div className="container">
            <h2>Bienvenido, {user.name}!</h2>
            <p><strong>Apellidos:</strong> {user.lastName} {user.motherLastName}</p>
            <p><strong>Edad:</strong> {user.age}</p>
            <p><strong>Teléfono:</strong> {user.phone}</p>
            <p><strong>Correo:</strong> {user.email}</p>
            <button className="btn btn-danger" onClick={() => { localStorage.removeItem("user"); navigate("/login"); }}>Cerrar Sesión</button>
        </div>
    );
}
