import React from 'react'

const Resume = () => {
    return (
        <div className="resume">
            <img  src={`${process.env.PUBLIC_URL}/Wendy Harris-Resume.pdf(read-only)`}
                      alt="resume" 
                />
        </div>
    )
}

export default Resume
