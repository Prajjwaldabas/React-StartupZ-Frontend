import React, { useState } from 'react';
import './Slider.css';




const Slider = () => {
    const images = [
        "https://startupzworld.s3.ap-south-1.amazonaws.com/assets/images/category/6g106td0iLOqU4sCfo7d37TTmxUKFkJR.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY76JE5Z7IKFA7IXN%2F20230611%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230611T153330Z&X-Amz-Expires=900&X-Amz-Signature=b68caa76e24aa1fc23f52d076e757d759ca26e85cb3b0e28fb7d4dcc0f9dca62&X-Amz-SignedHeaders=host",
        "https://startupzworld.s3.ap-south-1.amazonaws.com/assets/images/category/0xP1aLq3A57IMRfPY4EQg4rCVy0yrQ7l.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY76JE5Z7IKFA7IXN%2F20230611%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230611T153330Z&X-Amz-Expires=900&X-Amz-Signature=70b1c43d2cd43856256ce48cdcbb8f387f5037cdf712f1b93267f080ecb25d16&X-Amz-SignedHeaders=host",
        "https://startupzworld.s3.ap-south-1.amazonaws.com/assets/images/category/4L2sfMQe1hINqjjXIELDqHXhj3qZCzuR.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY76JE5Z7IKFA7IXN%2F20230611%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230611T153330Z&X-Amz-Expires=900&X-Amz-Signature=4f05c2904f21f908739aedcf917f6a1312b5bdf5bf46c99d20c2bae1a47c4c66&X-Amz-SignedHeaders=host",
       " https://startupzworld.s3.ap-south-1.amazonaws.com/assets/images/category/BLOCKCHAIN.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY76JE5Z7IKFA7IXN%2F20230611%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230611T153330Z&X-Amz-Expires=900&X-Amz-Signature=988edcf1b4571df55669a8ed417a63808f4a78ba3056131e061310e1c548540f&X-Amz-SignedHeaders=host",
      
       
      ];

  const headings = ["Augmented Reality", "Cyber Security", "Block Chain","Robotics"]; // Add more headings here

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
//   };

  return (

<div className="category">


    
    <div className="slider-container">

        <div className="categoryHeading"><span>Explore By</span> <h1 className="catheading">Category</h1>
        </div>
      <div className="slider-content">
        {images.map((image, index) => (
          <div 
            className={`slider-card ${index === activeIndex ? 'active' : ''}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img src={image} alt={`Card ${index + 1}`} />
            <h3>{headings[index]}</h3>
          </div>
        ))}
      </div>

      <div className="categoryHeading"><span>Explore By</span> <h1>Business Model</h1>
        </div>

        <div className="businessModels">

<div className='businessType'>B2B- Busines to Business</div>
<div  className='businessType'>B2C-Business To Consumer</div>
<div className='businessType'>B2B2C- Busines To Business To Consumer</div>
<div className='businessType'>C2C- Consumer To Consumer</div>
<div className='businessType'>C2B- Consumer To Business</div>
<div className='businessType'>B2A- Business To Administration</div>
<div className='businessType'>C2A- Customer To Administration</div>
<div className='businessType'>Other</div>
        </div>
    
    </div>


    
    </div>
  );
};

export default Slider;
