import React from 'react'
import imageUser from '../../img/image-user.jpg'

const ListComment = props => {
    return (
        <div className="list-comments">
            <div className="comment">
                <div className="avatar">
                    <img src={imageUser} alt="" />
                </div>
                <div className="content">
                    <h4>Cesar Villegas</h4> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi nisi provident, voluptatibus impedit possimus! Provident perspiciatis dolor accusantium alias maxime debitis ullam est quis quo et, reprehenderit dolore nisi!
                    <p><span>Hace 40 minutos</span></p>
                </div>
            </div>
            <div className="comment">
                <div className="avatar">
                    <img src={imageUser} alt="" />
                </div>
                <div className="content">
                    <h4>Cesar Villegas</h4> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi nisi provident, voluptatibus impedit possimus! Provident perspiciatis dolor accusantium alias maxime debitis ullam est quis quo et, reprehenderit dolore nisi!
                    <p><span>Hace 40 minutos</span></p>
                </div>
            </div>
            <div className="comment">
                <div className="avatar">
                    <img src={imageUser} alt="" />
                </div>
                <div className="content">
                    <h4>Cesar Villegas</h4> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit excepturi nisi provident, voluptatibus impedit possimus! Provident perspiciatis dolor accusantium alias maxime debitis ullam est quis quo et, reprehenderit dolore nisi!
                    <p><span>Hace 40 minutos</span></p>
                </div>
            </div>
            <input type="text" placeholder="Escribe un comentario" />
        </div>
    )
}

export default ListComment
