import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
  return (
    <div id="headerContainer">
         <section id="header">

<div id="navContainer">

<div id="logo">
    <img src="https://startupz.world/images/white-logo.png" alt="logo" />
</div>

              <div > <ul id="navItems">
                  <li> Home</li>
                  <li> Startup </li>
                  <li> Investor</li>
                  <li> About Us</li>
                    
                </ul> 
                </div>

                <div id='rightNav'>

                   

                    <div id="LogIn">
                    <i><PersonIcon/></i>
                        <p id="loginP">Log In</p>
                    </div>

                    <div id="addListingBtn"><button>Add Listing</button></div>
                    
                </div>
          

            </div>

            <div id="discoverHeading">

                <div id="discover">
                <h3> Discover</h3>
                </div>

                <div id="amazing">
                    <p>
                        Amazing Startups
                    </p>
                </div>

                <div id="greatHeading">
                    <p>
                    Find great startups curated by our experts for investing.
                    </p>
                </div>

                <div id="searchInput">


<div id="input">
<input type="text"  placeholder='Startup Name  Ex: Nykaa,Nearbygrocer,etc'/>
</div>
                  

<div id="searchBtn">

  <p><i>
    <SearchIcon/>
    </i></p>

  
<p>Search</p>


</div>
                  
                </div>



            </div>

<div id="imageContainer">
  <img src= "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="" />
</div>



    </section>
    </div>
  )
}

export default Header;



