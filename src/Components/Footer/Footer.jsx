import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <div id="footerContainer">


<div id='itemsContainer'>


<div className='items'>

   <div className='childitems1' id="logoimg">
    <img src="https://startupz.world/images/white-logo.png" alt="" />
    </div> 

    <div className='childitems2'>
        <p>101, Relcon Enclave, NH-48</p>
        <p>Surat, Gujarat</p>
        <p>India - 394325</p>
    </div>


</div>


<div className='items'>
<div className='childitems1'>
<h3>Company</h3>
</div>
<div className='childitems2'>
<p>About Us</p>
<p>Conatct Us</p>
<p>Pricing</p>
</div>
</div>

<div className='items'>
<div className='childitems1'>
<h3>Quick Links</h3>
</div>
<div className='childitems2'>
<p>About Us</p>
<p>Conatct Us</p>
<p>Pricing</p>
</div>
</div>


<div className='items'>
<div className='childitems1'>
<h3>Company</h3>
</div>
<div className='childitems2'>
<p>Community Guidelines</p>
<p>Terms Of Use</p>
<p>Cancellation & Refund</p>
<p>Shipping & Exchange</p>
</div>
</div>


<div className='items'>
<div className='childitems1'>
<h3>FAQs</h3>
</div>
<div className='childitems2'>
<p>Startup FAQs</p>

</div>
</div>





</div>

<div id="SocialLinks">

    <div id="icons">
<InstagramIcon/>
<FacebookIcon/>
<TwitterIcon/>

    </div>

    <div>
<p> © 2023 <b> Prajjwal Chaudhary</b>, All Rights Resevered.</p>
    </div>



</div>

    </div>
  )
}

export default Footer