import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

    <div>
      <ul>{links.map(links => <li key={links}>{links}</li>)}</ul>
    </div>
  

  return (
  <nav>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
     
    
  </nav>

  )
}

export default NavBar;
