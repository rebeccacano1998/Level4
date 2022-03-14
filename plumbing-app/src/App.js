
import React from 'react'
import {Link,Routes,Route} from "react-router-dom"
import Home from './HOME/Home.js'
import About from './ABOUT/About.js'
import Services from './SERVICES/Services.js'

function App() {




  return (
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/services">Services</Link>

      <Routes>
        <Route exact path= "/" element={<Home/>}/>
        <Route  exact path= "/about" element={<About/>}/>
        <Route  exact path= "/services" element={<Services/>}/>




      </Routes>



    </div>
  );

  
}

export default App;
