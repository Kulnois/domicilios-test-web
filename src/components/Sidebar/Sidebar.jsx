import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/user/user.actions'

const Sidebar = ({ isOpen, toggle }) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        toggle()
    }
    return (
        <aside onClick={toggle} style={{ opacity: isOpen ? '100%' : '0', top: isOpen ? '0' : '-100%' }} >
            <div className="icon" onClick={toggle}>
                <i className="close-icon fas fa-times"></i>
            </div>
            <div className="sidebar-wrapper">
                    {userInfo ? (
                        <ul className="sidebar-menu">
                            <a href="/profile" className="sidebar-link" onClick={toggle}>Hola, {userInfo.name}</a>
                            <div className="side-btn-wrap">
                                <a href="/login" className="sidebar-btn" onClick={logoutHandler}>Cerrar sesión</a>
                            </div>
                        </ul>
                    ) : (
                        <ul className="sidebar-menu">
                            <a href="/" className="sidebar-link" onClick={toggle}>Domicilios Test</a>
                            <div className="side-btn-wrap">
                                <a href="/login" className="sidebar-btn" onClick={toggle}>Iniciar sesión</a>
                            </div>
                        </ul>
                    )}  
            </div>
        </aside>
    )
}

export default Sidebar
