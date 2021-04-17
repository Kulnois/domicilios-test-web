import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { register } from '../redux/user/user.actions'

const RegisterView = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden')
        } else {
            dispatch(register(name, email, password))
        }
    }
    return (
        <div className="auth">
            <div className="container">
                <h1>Crear cuenta</h1>
                {message && (<Message>{message}</Message>)}
                {error && (<Message>{error}</Message>)}
                {loading && <Loader />}
                <form onSubmit={submitHandler} className="form" >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)} />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo Electronico"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)} />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Contraseña" 
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}/>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirmar Contraseña" 
                        value={confirmPassword}
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <hr className="solid" />
                    <button className="btn-link" type="submit">Iniciar sesión</button>
                    <p>¿Tienes una cuenta? <a href="/login">Regístrate </a> </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterView
