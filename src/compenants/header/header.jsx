import React, {useState} from "react";
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => { 
  const [menuOpened, setMenuOpened] = useState(false)

   /*So here if the client document i -800px push the menu opened */
  
   const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%" }

    }
  }
  return (
   <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
        onOutsideClick={() =>{setMenuOpened(false)
        }}
        >

        <div className="flexCenter h-menu"  style={getMenuStyles(menuOpened)}>
          <a href=""> Courses </a>
          <a href=""> Home </a>
          <a href=""> Our Value </a>
          <a href=""> Get Starting </a>
          <button className="butto">
            <a href=""> CONTACT US</a>
            </button>  
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() =>setMenuOpened ((prev)=!prev) }> 
         <BiMenuAltRight size={30}/> 
         
        </div>
      </div>
   </section>
    );
}

export default Header;