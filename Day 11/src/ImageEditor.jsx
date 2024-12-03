import React, { useState } from 'react';
import './ImageEditor.css';

const ImageEditor = () => {
    const [heightx, setHeightx] = useState(50);
    const [width, setWidth] = useState(50);
    const [rotation, setRotation] = useState(0); // New state for rotation

    return (
        <div className="image-editor">
            <div className="image-container">
                <img
                    src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
                    style={{
                        width: `${width}px`,
                        height: `${heightx}px`,
                        transform: `rotate(${rotation}deg)`, // Apply rotation
                    }}
                    alt="Editable"
                />
            </div>
            <div className="controls">
                <button onClick={() => setWidth(width + 11)}>Increase Width</button>
                <button onClick={() => setWidth(width - 100)}>Decrease Width</button>
                <button onClick={() => setHeightx(heightx + 100)}>Increase Height</button>
                <button onClick={() => setHeightx(heightx - 1)}>Decrease Height</button>
                <button onClick={() => setRotation(rotation + 90)}>Rotate Clockwise</button>
                <button onClick={() => setRotation(rotation - 90)}>Rotate Anti-Clockwise</button>
            </div>
        </div>
    );
};

export default ImageEditor;