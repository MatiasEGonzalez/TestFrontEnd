import React from 'react'

const BannerGetToKnowUs = () => {
  return (
    <div className='BannerGetToKnowUs'>
      <img src='/Img/deco10.png' alt="deco10" className='deco10' /> 
      <img src='/Img/deco11.png' alt="deco11" className='deco11' /> 
      <img src='/Img/deco12.png' alt="deco12" className='deco12' /> 
      <h4 className='TextBanner'>What You'll Get At Your <span className='free'>Free</span> Consultation</h4>
      
      <div className='Frame82'><h5 className='TextBodyMass'>Body Mass Index</h5>
      <img src='/Img/deco9.png' alt="deco9" className='deco9' /> 
      <ul className='Frame84'>      
        <li className='List1'>Complete understanding of your body composition</li>
        <li className='List2'>A clear view of your weight loss goals</li>
        <li className='List3'>Clear data to help you make an informed decision about your health</li>
      </ul>
      
        <div className='Frame83'><h5 className='TextVitalSignsCheck'>Vital Signs Check</h5>
        <img src='/Img/deco9.png' alt="deco9" className='deco9 pinkDeco' /> 
        <ul className='Frame84'>      
          <li className='List1 gapList'>Body temperature</li>
          <li className='List2 gapList'>Pulse rate, heart's rate, rhythm and regularity</li>
          <li className='List3 gapList'>Breathing rate</li>
          <li className='List3 gapList'>Blood pressure</li>
        </ul>       

        </div>        
           
    </div>
    <button className='ButttonFont Middle  Button1 Button13'>{ ('Book my appointment') }</button>
    
    </div>
    

  )
}

export default BannerGetToKnowUs
