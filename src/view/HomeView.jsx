import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostStatus from '../components/PostStatus/PostStatus'
import Status from '../components/Comment/Status'
import Message from '../components/Message/Message'
import Loader from '../components/Loader/Loader'
import { listStatuses } from '../redux/status/status.action'

const HomeView = props => {

    const dispatch = useDispatch()
    const statusList = useSelector(state => state.statusList)
    const { loading, error, statuses } = statusList

    const statusDelete = useSelector(state => state.statusDelete)
    const {success} = statusDelete    

    useEffect(() => {
        dispatch(listStatuses())
    }, [dispatch, success])

    return (
        <div className="home">
            <PostStatus />
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : null }
            {statuses.map(status => (
                <div className="container" key={status._id}>
                    <Status status={status} />
                </div>
                
            ))}
        </div>
    )
}

export default HomeView
