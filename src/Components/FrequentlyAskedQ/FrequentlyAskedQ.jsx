import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FrequentlyAskedQ = () => {
  return (
    <div className='FrequentlyAskedQ '>
        
        <h5 className='TextFrequentlyAskedQ'>Frequently Asked Questions</h5>
        <div className='Frame101'>
        <img src='/Img/deco13.png' alt="deco13" className='ColorFrequently' /> 
        <img src='/Img/deco14.png' alt="deco14" className='deco14' /> 
        <img src='/Img/deco15.png' alt="deco15" className='deco15' /> 
        <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0" className='mb-4 '>
      

        <Accordion.Header>Why is it free?</Accordion.Header>
        <Accordion.Body >
         
         
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mb-4'>
        <Accordion.Header>Do I need this if I’ve had my yearly medical check? What is the difference?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mb-4'>
        <Accordion.Header>Can I bring another person to the appointment?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mb-4'>
        <Accordion.Header>How long does it take?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mb-4'>
        <Accordion.Header>What if I have to cancel or if I’m not sure I’ll be able to make it?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className='mb-4'>
        <Accordion.Header>Do I need to bring anything with me?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6" className='mb-4'>
        <Accordion.Header>What if I don’t have insurance?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7" className='mb-4'>
        <Accordion.Header>Do the weight loss programs you offer work?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8" className='mb-4'>
        <Accordion.Header>What’s the catch?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9" className='mb-4'>
        <Accordion.Header>Will I have to exhaust myself in the gym to make it work?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10" className='mb-4'>
        <Accordion.Header>Where are you located?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
    
        </div>
        
        <button className='ButttonFont Middle  Button1 Button13 buttonBottom'>{ ('Book my appointment') }</button>
      
    </div>
  )
}

export default FrequentlyAskedQ








/*
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
    */


/*<ul>
                <li className='Frame90'>Why is it free? <img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame91'>Do I need this if I’ve had my yearly medical check? What is the difference? <img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame92'>Can I bring another person to the appointment?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame93'>How long does it take?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame94'>What if I have to cancel or if I’m not sure I’ll be able to make it?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame95'>Do I need to bring anything with me?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame96'>What if I don’t have insurance?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame97'>Do the weight loss programs you offer work?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame98'>What’s the catch?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame99'>Will I have to exhaust myself in the gym to make it work?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
                <li className='Frame100'>Where are you located?<img src='/Img/VectorPink.png' alt='VectorPink' className='VectorPinkAccordion'/></li>
            </ul>
            */