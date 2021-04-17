import React from 'react'

const PostStatus = props => {
    return (
        <div className="container post-status">
            <input type="text" placeholder="Escribe aquí tu estado" />
            <hr className="solid" />
            <button className="btn-link">Publicar</button>
        </div>
    )
}
export default PostStatus
