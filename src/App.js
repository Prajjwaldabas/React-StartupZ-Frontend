



import './App.css';
import Header from './Components/Header/Header';
import Interested from './Components/Interested/Interested';
import ImageSlider from './Components/Slider/Slider';
import BusinessNature from './Components/BusinessNature/BusinessNature';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    
   <Header/>
   <ImageSlider/>
   <Interested type="Interested In"/>
   <BusinessNature type="Business Nature"/>
   <Interested type="Funding Type" />
   <BusinessNature type="Stage"/>

   <Footer/>

    </div>
  );
}

export default App;
