import React from 'react'
import "../Slider/Slider.css"
const Interested = ({type}) => {
  return (
    <div className="category" id="InterestedSection">

        <div className="slider-container">

        <div className="categoryHeading"><span>Explore By</span> <h1 className="catheading">{type}</h1>  </div>
      

        <div className="businessModels">

            <div className='businessType'>
                <p>Incubation</p>
            </div>
            <div className='businessType'>
<p>Acceleration</p>
            </div>
            <div className='businessType'>
<p>Investment</p>
            </div>
            <div className='businessType'>
<p>Tech Mentorship </p>
            </div>
            <div className='businessType'>
<p>Marketing MentorShip</p>
            </div>
            <div className='businessType'>
<p>Legal Mentorship</p>
            </div>
            <div className='businessType'>
<p>Operation Mentorship</p>
            </div>
            <div className='businessType'>
<p>Financials Mentorship</p>
            </div>
            <div className='businessType'>
<p> 
    Business Collabs: Co- Founder
</p>
            </div>
           

        </div>

        </div>


    </div>
  )
}

export default Interested