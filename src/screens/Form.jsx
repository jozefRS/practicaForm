import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Fa0 } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; 

export default function Form() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required("El nombre es obligatorio"),
        lastName: yup.string().required("El apellido paterno es obligatorio"),
        motherLastName: yup.string().required("El apellido materno es obligatorio"),
        email: yup.string().required("El email es requerido").email("El email no es valido"),
        phone: yup.string()
            .required("El telefono es requerido")
            .matches(/^[0-9]+$/, "Solo se aceptan numeros")
            .min(10, "El numero de telefono debe tener al menos 10 dígitos")
            .max(15, "El numero de telefono debe ser de máximo 15 números"),
        age: yup.number()
            .integer("Debe ser un número entero")
            .min(18, "La edad debe ser mínima de 18")
            .required("La edad es requerida")
            .typeError("La edad debe ser un número"),
        pass: yup.string()
            .required("La contraseña es requerida")
            .min(4, "Debe tener mínimo 4 caracteres")
            .max(10, "Debe tener máximo 10 caracteres"),
        confirmPass: yup.string()
            .oneOf([yup.ref('pass'), null], "Las contraseñas no coinciden")
            .required("Debes confirmar tu contraseña"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(data) {
        console.log('Formulario enviado');
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/login');

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='container'>
                <h1 className='title'>Formulario</h1>
                <div className="input-group">
                    <FaUser className="icon" />
                    <label>Nombre:</label>
                </div>
                <input type="text" placeholder='Nombre(s)' {...register("name")} />
                <p>{errors.name?.message}</p>

                <div className="input-group">
                    <FaUser className="icon" />
                    <label>Apellido Paterno:</label>
                </div>
                <input type="text" placeholder='Apellido Paterno' {...register("lastName")} />
                <p>{errors.lastName?.message}</p>

                <div className="input-group">
                    <FaUser className="icon" />
                    <label>Apellido Materno:</label>
                </div>
                <input type="text" placeholder='Apellido Materno' {...register("motherLastName")} />
                <p>{errors.motherLastName?.message}</p>

                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <label>Correo Electrónico:</label>
                </div>
                <input type="text" placeholder='Email' {...register("email")} />
                <p>{errors.email?.message}</p>

                <div className="input-group">
                    <FaPhone className="icon" />
                    <label>Teléfono:</label>
                </div>
                <input type="text" placeholder='Teléfono' {...register("phone")} />
                <p>{errors.phone?.message}</p>

                <div className="input-group">
                    <Fa0 className="icon" />
                    <label>Edad:</label>
                </div>
                <input type="number" placeholder='Edad' {...register("age")} />
                <p>{errors.age?.message}</p>

                <div className="input-group">
                <FaLock className="icon" />
                <label>Contraseña:</label>
                </div>
                
                {/* Campo de Contraseña con botón para ver/ocultar */}
                <div className="input-group" style={{ position: "relative" }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder='Contraseña'
                        {...register("pass")}
                        style={{ paddingRight: "40px", width: "100%" }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            color:'black',
                            background: "none",
                            border: "none",
                            outline: "none",
                        }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <p>{errors.pass?.message}</p>

                <div className="input-group">
                <FaLock className="icon" />
                <label>Confirmar contraseña:</label>
                </div>

                {/* Campo de Confirmar Contraseña con botón para ver/ocultar */}
                <div className="input-group" style={{ position: "relative" }}>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder='Confirmar contraseña'
                        {...register("confirmPass")}
                        style={{ paddingRight: "40px", width: "100%" }}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            color:'black',
                            background: "none",
                            border: "none",
                            outline: "none",
                        }}
                    >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <p>{errors.confirmPass?.message}</p>

                <input type="submit" className='enviar' />
            </form>
        </div>
    );
}
