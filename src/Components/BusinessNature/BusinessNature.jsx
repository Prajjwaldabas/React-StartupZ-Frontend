import React from 'react'
import "../Slider/Slider.css"
const BusinessNature = ({type}) => {
  return (
    <div className='category' id="businessContainer">


<div className='slider-container' id="business">


<div className="categoryHeading" id="Businessheading"><span>Explore By</span> <h1 >{type}</h1>  </div>
        
        <div className="businessModels" id="businessModelsContainer">

<div className='businessType'><p>Service</p></div>
<div className='businessType'><p>Product</p></div>
<div className='businessType'><p>Both</p></div>

        </div>
</div>
    </div>
  )
}

export default BusinessNature;