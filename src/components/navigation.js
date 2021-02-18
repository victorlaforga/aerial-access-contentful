import React from "react"
import Logo from "../images/logo.png"


const Navigation = () => {
return (
<header class="nav-container">
 
   

  <div className="navigation container">
    
  <img className="Logo" src={Logo} alt="logo-aerial-access" />
    <nav>
      <a href="">Project</a>
      <a className="nav-system" href="">system</a>
      <a href="">Emergency</a>
      <a href="">Trainingen</a>
      <a href="">Over ons</a>
      <a href="">Contact</a>
    </nav>
   
  </div>
</header>

)
}

export default Navigation