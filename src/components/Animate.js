import React, { useState } from 'react';
import '../STyles/style.css'; 

const Animate = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (event) => {
    const imageRect = event.target.getBoundingClientRect(); 
    const offsetX = event.clientX - imageRect.left; 
    const offsetY = event.clientY - imageRect.top;
   
  if(offsetX > imageRect.width / 4){
      setIsFlipped(true);
    }
    else {
      setIsFlipped(false);
    }

    setPosition({ x: offsetX - imageRect.width / 1.7, y: offsetY - imageRect.height / 1.7 });
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="bg-image"></div>
      <img
        className="gif-image"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) ${isFlipped ? 'scaleX(-1)' : ''}`,
          transition: 'transform 1.5s ease-in-out'
        }}
        src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"
        alt="animated gif"
      />
    </div>
  );
};

export default Animate;
