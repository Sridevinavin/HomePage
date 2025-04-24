import { useState } from 'react'
import Navigationbar from './Components/Navigationbar';
import './App.css';
import Trellorow from './Components/Trellorow';
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

function App() {

  return (
    <>
      <div >
        <Navigationbar/>
        <Trellorow/>
        <ContactUs/>
      </div>
    </>
  )
}

export default App
