import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStatus } from '../../redux/status/status.action'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import { listStatuses } from '../../redux/status/status.action'

const PostStatus = props => {
    const [content, setContent] = useState()
    const [message, setMessage] = useState(null)
    const [loadData, setLoadData] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const statusCreate = useSelector(state => state.statusCreate)

    const { loading, error, success } = statusCreate
    
    const dispatch = useDispatch()

    const submitHandler = () => {
        if (userInfo) {
            if(content && content.trim() !== '') {
                setLoadData(true)
                dispatch(createStatus(content)) 
            }
        } else {
            setMessage('Debe estar registrado para agregar un estado')
        }
    }
    

    useEffect(() => {
        if (success) {
            dispatch(listStatuses())
            setContent("")
            setLoadData(false)
        }        
        if (error) {
            setLoadData(false)
        }
    }, [dispatch, success, error])

    return (
        <>
            <div className="container post-status">
                <input 
                    type="text" 
                    placeholder="Escribe aquí tu estado"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)} />
                <hr className="solid" />
                <button className="btn-link" onClick={submitHandler} disabled={loadData}>Publicar</button>
            </div>
            {message && (<Message >{message}</Message>)}
            {error && (<Message >{error}</Message>)}
            {loading && <Loader />}
        </>
    )
}
export default PostStatus
