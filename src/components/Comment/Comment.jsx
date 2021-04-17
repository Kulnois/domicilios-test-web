import React from 'react'
import imageUser from '../../img/image-user.jpg'
import ListComment from './ListComment'

const Comment = props => {
    return (
        <>
            <div className="comment">
                <div className="avatar">
                    <img src={imageUser} alt="" />
                </div>
                <div className="content">
                    <h1>Cesar Villegas</h1>
                    <span>Hace 40 minutos</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi nisi provident, voluptatibus impedit possimus! Provident perspiciatis dolor accusantium alias maxime debitis ullam est quis quo et, reprehenderit dolore nisi! </p>
                    <button>Reaccionar</button>
                    <button>Comentar</button>
                </div>
            </div>
            <hr className="solid" />
            <div className="info">
                <div className="columns reactions" >
                    <div className="reaction"></div>  <div className="number-reaction">3</div>
                </div>
                <div className="columns number-comments">
                    <p>3 Comentarios</p>
                </div>
            </div>
            <ListComment />
        </>
    )
}

export default Comment
