import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalExp from './components/EducationalExp'
import PracExp from './components/PracExp'

function App() {

  return (
   <>
   <GeneralInfo className='general' />
   <EducationalExp />
   <PracExp />
   <br />
    <br />
  <button>Edit</button>
  <br />
  <br />
  <button>Submit</button>
   </>
  )
}

export default App
