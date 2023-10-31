import React from 'react'

const EducationalExp = () => {

  return (
       <>
    <div>
        <h2>Educational Experience</h2>
        <h4>School Name</h4>
        <input 
            className='SchoolName'
            type='text'
            placeholder='Enter your school name'
        />
        <br />
        <br />
        <h4>Title Of Study</h4>
        <input 
            className='TOS'
            type='text'
            placeholder='Enter your title'
        />
        <br />
        <br />
        <h4>Date Of Study</h4>
        <input 
            className='DOS'
            type='text'
            placeholder='Enter date of study'
        />
    </div>
    </>
  )
}

export default EducationalExp