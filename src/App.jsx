import { useState, useEffect } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import EducationalExp from './components/EducationalExp'
import PracExp from './components/PracExp'

function App() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    SchoolName: '',
    TOS: '',
    DOS: '',
    CompanyName: '',
    PT: '',
    MR: '',
    DFC: '',
  })
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);

    console.log("Edited successfully");
  }

  const handleSave = () => {
    setIsEditing(false);

    console.log("Saved successfully");
  }

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  useEffect(() => {
    setFormData({
      Name: '',
      Email: '',
      Phone: '',
      SchoolName: '',
      TOS: '',
      DOS: '',
      CompanyName: '',
      PT: '',
      MR: '',
      DFC: '',
    });

  },[]);

  function handleSubmit(event) {
    event.preventDefault();



    console.log("Form Submitted Successfully", formData);
  }

  return (
   <>
   <form onSubmit={handleSubmit}>
   <GeneralInfo className='general' isEditing={isEditing} formData={formData} onChange={(name, value) => handleChange(name, value)}/>
   <EducationalExp isEditing={isEditing} formData={formData} onChange={(name, value) => handleChange(name, value)}/>
   <PracExp isEditing={isEditing} formData={formData} onChange={(name, value) => handleChange(name, value)}/>
   <br />
    <br />
    {isEditing ? (
      <button type='button' onClick={handleSave}>Save</button>
    ) : (
      <button type='button' onClick={handleEdit}>Edit</button>
  )}
  <br />
  <br />
  <button type='submit'>Submit</button>
  </form>
   </>
  )
}

export default App
