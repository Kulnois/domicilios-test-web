import React from 'react'

const RegisterView = props => {
    return (
        <div className="auth">
            <div className="container">
                <h1>Crear cuenta</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo Electronico" />
                    <input type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Confirmar Contraseña" />
                    <hr className="solid" />
                    <button className="btn-link">Iniciar sesión</button>
                    <p>¿Nuevo cliente? <a href="">Crear cuenta nueva</a> </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterView
