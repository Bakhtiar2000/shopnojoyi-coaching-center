import React, { useState } from 'react';

const PictureBox = ({ photo }) => {
    const { _id, img, description }= photo
    const [hoveredId, setHoveredId] = useState(null);
    const handleHover = id => {
        setHoveredId(id);
    };

    const handleLeave = () => {
        setHoveredId(null);
    };
    return (
        <div 
            className='relative mx-auto' 
            onMouseEnter={() => handleHover(_id)}
            onMouseLeave={handleLeave}
        >
             <img className={`duration-300 rounded hover:shadow-xl hover:shadow-title/30 ${hoveredId === _id ? 'brightness-50' : ''}`} src={img} alt="" />

             <div className={`absolute bottom-0 text-white duration-300 ease-in-out ${hoveredId === _id ? 'visible' : 'hidden'}`}>
                {hoveredId === _id && <p className='text-xl font-semibold ml-4 mb-4'>{description}</p>}
            </div>
        </div>
    );
};

export default PictureBox;