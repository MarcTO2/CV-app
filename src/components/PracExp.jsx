import React from 'react'

const PracExp = () => {

  return (
    <>
    <div>
        <h2>Practical Experience</h2>
        <h4>Company Name</h4>
        <input 
            className='CompanyName'
            type='text'
            placeholder='Enter your company name'
        />
        <br />
        <br />
        <h4>Position Title</h4>
        <input 
            className='PT'
            type='text'
            placeholder='Enter your postiton title'
        />
        <br />
        <br />
        <h4>Main Responsibilities</h4>
        <input 
            className='MR'
            type='text'
            placeholder='Enter your role'
        />
        <br />
        <br />
        <h4>Date From - Current</h4>
        <input 
            className='DFC'
            type='text'
            placeholder='Enter date from to date'
        />
    </div>
    </>
  )
}

export default PracExp