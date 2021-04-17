import React, {useState} from 'react'

const Message = ({ children }) => {

    const [close, setClose] = useState(false)

    return (
        <div className="alert" style={{ display: close ? 'none'  : 'inline'}}>
            <span className="closebtn" onClick={() => setClose(true)} >&times;</span>
            {children}
        </div>
    )
}

export default Message
