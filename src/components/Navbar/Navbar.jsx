import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/user/user.actions'

const Navbar = ({toggle}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <nav>
            <div className="nav-container">
                <a className="nav-logo" href="/">Domicilios Test</a>
                <div className="nav-btn">
                    {userInfo ? (
                        <>
                        <a className="nav-name-user" href="/profile">Hola, {userInfo.name}</a>
                        <a className="btn-link logout" href="/login" onClick={logoutHandler}>Cerrar sesión</a>
                        </>
                        
                    ) : (
                        <a className="btn-link" href="/login">Iniciar sesión</a>
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
