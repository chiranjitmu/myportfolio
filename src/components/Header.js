import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import Fade from 'react-reveal/Fade';
import './Header.css'

function Header() {

    const [modal, setModal] = useState(false);

    const setToggel = () =>
    {
      setModal(!modal)
    }
  
    if(modal)
    {
      document.body.classList.add('active-modal')
    }else{
      document.body.classList.remove('active-modal')
    }
  


  

  return (
    <div className='Header'>
      <h1 className='header-logo'>PORTFOLIO</h1>
      <div className='menu'>
               <a className="pop-home" href='/'>HOME</a> 
               <a className="pop-about" href='/About'>ABOUT</a>
               <a className="pop-project" href='/Resume'>RESUME</a> 
               <a className="pop-contact" href='/Contact'>CONTACT</a>
      </div>
      <hr className="line-5"></hr>





      {/* mobile version */}
     
        <button 
           onClick={setToggel} 
           className='bt-open'>
           <AiOutlineMenu />
        </button>
        {modal && (  
           <Fade top>
          <div className='modal'>
              <div onClick={setToggel} className='overlay'></div>
              <div className='modal-content'>
               <a className="mobilepop-home" onClick={setToggel} href='/'>HOME</a>
               <hr className="line-1"></hr>
               <a className="mobilepop-about" onClick={setToggel} href='/About'>ABOUT</a>
               <hr className="line-2"></hr>
               <a className="mobilepop-project" onClick={setToggel} href='/Resume'>RESUME</a>
               <hr className="line-3"></hr>
               <a className="mobilepop-contact" onClick={setToggel} href='/Contact'>CONTACT</a>
               <hr className="line-4"></hr>
               <button 
                 onClick={setToggel} 
                 className='bt-close'>
                <GiCancel />
               </button>
               </div>
            </div>
                 </Fade>
          )}   
          </div>  
 )
}

export default Header