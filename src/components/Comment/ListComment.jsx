import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from '../../redux/comment/comment.action'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import imageUser from '../../img/image-user.jpg'
import moment from 'moment'

const ListComment = ({status, addComment}) => {
    const [content, setContent] = useState()
    const [message, setMessage] = useState(null)
    const [loadData, setLoadData] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const commentCreate = useSelector(state => state.commentCreate)

    const { loading, error, success, comment } = commentCreate
    
    const dispatch = useDispatch()

    const keyPressed = (event) => {
        if (event.key === "Enter") {
            if (userInfo) {
                if(content && content.trim() !== '') {
                    setLoadData(true)
                    dispatch(createComment({content: content, statusId: status._id})) 
                }
            } else {
                setMessage('Debe estar registrado para agregar un comentario')
            }
        }        
    }
    
    useEffect(() => {
        if (success) {
            setContent("")
            setLoadData(false)
        }        
        if (error) {
            setLoadData(false)
        }
    }, [dispatch, success, error])

    useEffect(() => {
        if (loadData) {
            if (comment) {
                addComment({
                    ...comment,
                    user: userInfo
                })
            }
        }
    }, [comment, userInfo, loadData, addComment])

    return (
        <>
            <div className="list-comments">
                {status?.comments.map(comment => (
                    <div className="comment" key={comment._id}>
                        <div className="avatar">
                            <img src={imageUser} alt="" />
                        </div>
                        <div className="content">
                            <h4>{comment?.user?.name}</h4> {comment?.content}
                            <p><span>{moment(comment?.createdAt).fromNow()}</span></p>
                        </div>
                    </div>   
                ))}
                <input 
                    autoFocus
                    type="text" 
                    placeholder="Escribe un comentario" 
                    value={content  || ''}
                    name="content"
                    disabled={loadData}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyPress={keyPressed} />
            </div>
            {message && (<Message >{message}</Message>)}
            {error && (<Message >{error}</Message>)}
            {loading && <Loader />}
        </>
    )
}

export default ListComment
