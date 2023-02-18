
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rectangle1 from './Components/Header/Rectangle1'
import TitleChicago from './Components/TitleChicago/TitleChicago'
import Count from './Components/Count/Count'
import Subtitle from './Components/Subtitle/Subtitle'
import Buttons from './Components/Buttons/Buttons'
import Rectangle14 from './Components/Rectangle14/Rectangle14'
import WhoIsItFor from './Components/WhoIsItFor/WhoIsItFor'
import Rectangle614 from './Components/Rectangle614/Rectangle614'
import BannerGetToKnowUs from './Components/Banner&GetToKnowUs/Banner&GetToKnowUs'
import FrequentlyAskedQ from './Components/FrequentlyAskedQ/FrequentlyAskedQ'
import Rectangle23 from './Components/Rectangle23/Rectangle23'


function App() {
  
  

  return (
    <div className="App">
      <div className='mainConteiner'>
        <NavBar/>
        <Rectangle1/>
        <TitleChicago/>
        <Count/>
        <Subtitle/>
        <Buttons/>
        <Rectangle14/>
        <WhoIsItFor/>
        <Rectangle614/>
        <BannerGetToKnowUs/>
        <FrequentlyAskedQ/>
        <Rectangle23/>
        
      </div>
      
    </div>
    
  )
}

export default App
