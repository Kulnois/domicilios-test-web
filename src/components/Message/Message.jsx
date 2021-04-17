import React from 'react'

const Message = ({ message }) => {
    return (
        <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            {message}
        </div>
    )
}

export default Message
