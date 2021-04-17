import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { login } from '../redux/user/user.actions'

const LoginView = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    return (
        <div className="auth">
            <div className="container">
                <h1>Iniciar sesión</h1>
                {error && (<Message>{error}</Message>)}
                    {loading && <Loader />}
                <form onSubmit={submitHandler} className="form">
                    <input 
                        type="email" 
                        value={email} 
                        placeholder="Correo Electronico" 
                        required
                        onChange={(e) => setEmail(e.target.value)} />
                    <input 
                        type="password" 
                        value={password} 
                        placeholder="Contraseña" 
                        required
                        onChange={(e) => setPassword(e.target.value)}/>
                    <hr className="solid" />
                    <button className="btn-link" type='submit' >Iniciar sesión</button>
                    <p>¿Nuevo cliente? <a href="/register">Crear cuenta nueva</a> </p>
                </form>
            </div>
    </div>
    )
}

export default LoginView
