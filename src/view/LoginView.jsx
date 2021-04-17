import React from 'react'

const LoginView = props => {
    return (
        <div className="auth">
            <div className="container">
                <h1>Iniciar sesión</h1>
                <form action="" className="form">
                    <input type="email" placeholder="Correo Electronico" />
                    <input type="password" placeholder="Contraseña" />
                    <hr className="solid" />
                    <button className="btn-link">Iniciar sesión</button>
                    <p>¿Nuevo cliente? <a href="/register">Crear cuenta nueva</a> </p>
                </form>
            </div>
    </div>
    )
}

export default LoginView
