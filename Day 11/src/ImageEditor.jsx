import React, { useState } from 'react';


const ImageEditor = () => {
    const [heightx, setHeightx] = useState(50);
    const [width, setWidth] = useState(50);
    return (
        <div>
            <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" style={{ width: `${width}px`, height: `${heightx}px` }} />
            <div><button onClick={() => {
                setWidth(width + 11)
            }}>Increase Width</button>
                <button onClick={() => setWidth(width - 100)}>Decrease width</button>
                <button onClick={() => setHeightx(heightx + 100)}>Increse Height</button>
                <button onClick={() => setHeightx(heightx - 1)}>Decrease Height</button>
            </div>
        </div>
    )
}

export default ImageEditor;