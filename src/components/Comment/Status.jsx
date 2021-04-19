import React, {useState, useEffect} from 'react'
import imageUser from '../../img/image-user.jpg'
import ListComment from './ListComment'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { createReaction, deleteReaction } from '../../redux/reaction/reaction.action'
import { deleteStatus, listStatuses } from '../../redux/status/status.action'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'

const Status = ({ status }) => {
    const [showListComment, setShowListComment] = useState(false)
    const [message, setMessage] = useState(null)
    const [loadData, setLoadData] = useState(false)
    const [reactionStatusByUser, setReactionStatusByUser] = useState(null)
    const [numberComment, setNumberComment] = useState(0)
    const [removedStatus, setRemovedStatus] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const reactionCreate = useSelector(state => state.reactionCreate)

    const { loading, error, success, reaction } = reactionCreate
    
    const dispatch = useDispatch()

    const handleChangeReaction = () => {
        if (userInfo) {
            setLoadData(true)
            dispatch(createReaction(status._id))  
        } else {
            setMessage('Debe estar registrado para reaccionar')
        }
    }
    
    const handleChangeRemoveReaction = () => {
        if (reactionStatusByUser) {
            setLoadData(true)
            dispatch(deleteReaction(reactionStatusByUser._id))    
            setReactionStatusByUser(null) 
            setLoadData(false)       
            status.reactions = status.reactions.filter((reaction) => reaction.user !== userInfo._id)    
        }
    }
    
    useEffect(() => {
        if (status) {
            const reactionsUser = status?.reactions.find(reaction => reaction?.user === userInfo._id)
            if (reactionsUser) setReactionStatusByUser(reactionsUser)
        }
    }, [status, userInfo])
    
    useEffect(() => {
        if (loadData) {
            if (success) setLoadData(false)       
            if (error) setLoadData(false)
            if (reaction) {
                setReactionStatusByUser(reaction)
                status.reactions.push({
                    ...reaction
                })
            }
        }
    }, [success, error, reaction, loadData, status.reactions])

    useEffect(() => {
        if (userInfo) {
            if (userInfo._id === status?.user._id) setRemovedStatus(true)
        }
    }, [userInfo, status])

    const addComment = (comment) => {
        status?.comments.push({
            ...comment
        })
        setNumberComment(status?.comments.length ? status?.comments.length : 0)
    }

    const hanldeDelete = () => {
        setLoadData(true)
        dispatch(deleteStatus(status._id))
        dispatch(listStatuses())
    }

    return (
        <>
            <div className="comment">
                <div className="avatar">
                    <img src={imageUser} alt="" />
                </div>
                <div className="content">
                    <h1>{status?.user?.name}</h1>
                    <span>{moment(status?.createdAt).fromNow()}</span>
                    <p>{status?.content}</p>
                    {reactionStatusByUser ? 
                        <button onClick={handleChangeRemoveReaction} disabled={loadData}>Quitar reacción</button>
                        : 
                        <button onClick={handleChangeReaction} disabled={loadData}>Reaccionar</button>
                    }
                    <button onClick={() => setShowListComment(true)}>Comentar</button>
                    {removedStatus ? <button onClick={hanldeDelete} disabled={loadData}>Eliminar</button> : null}
                    
                </div>
                <div>
                </div>
            </div>
            <hr className="solid" />
            <div className="info">
                <div className="columns reactions" >
                    {status.reactions?.length ? (
                        <>
                            <div className="reaction"></div>  <div className="number-reaction">{status.reactions?.length}</div>
                        </>
                        
                    ) : (
                        <p className="not-reaction number-comments">Sin reacciones</p>
                    )} 
                    
                </div>
                <div className="columns number-comments" onClick={() => setShowListComment(!showListComment)}>
                    <p>{numberComment !== 0 ? `${numberComment} Comentarios` : 'Sin comentarios'} </p>
                </div>
            </div>
            {
                showListComment ? (<ListComment status={status} addComment={addComment} />) : null
            }            
            {message && (<Message >{message}</Message>)}
            {error && (<Message >{error}</Message>)}
            {loading && <Loader />}
        </>
    )
}

export default Status
