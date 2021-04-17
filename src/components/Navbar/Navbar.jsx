import React from 'react'

const Navbar = ({toggle}) => {
    const userInfo = null
    return (
        <nav>
            <div className="nav-container">
                <a className="nav-logo" href="/">Domicilios Test</a>
                <div className="nav-btn">
                    {userInfo ? (<a class="nav-name-user" href="/signin">Hola, Juan</a>) : (
                        <a className="btn-link" href="/signin">Iniciar sesión</a>
                    )}                
                </div>
                <div className="nav-btn mobile-icon" onClick={toggle}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
