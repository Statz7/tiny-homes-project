import React from 'react'

const Edit = ({open, onClose}) => {
    if(!open) return null
    return (
        <div onClick={onClose} className='overlay'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className='modalContainer'>
                <div className='modalRight'>
                    <p onClick={onClose} className="closeBtn">X</p>
                <div>
                    <h3>Edit</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;