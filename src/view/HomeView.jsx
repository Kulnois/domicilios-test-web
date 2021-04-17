import React from 'react'
import PostStatus from '../components/PostStatus/PostStatus'
import Comment from '../components/Comment/Comment'

const HomeView = props => {
    return (
        <div className="home">
            <PostStatus />
            <div className="container">
                <Comment />
            </div>
        </div>
    )
}

export default HomeView
