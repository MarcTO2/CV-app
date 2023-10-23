import React from 'react';



const GeneralInfo = () => {

  return (
    <>
    <div>
        <h1 className='Header'>CV-APPLICATION</h1>
        <h2>General Info</h2>
        <h4>Name</h4>
        <input 
            className='Name'
            type='text'
            placeholder='Enter your Full name'
        />
        <br />
        <br />
        <h4>Email address</h4>
        <input 
            className='Email'
            type='text'
            placeholder='Enter your email address'
        />
        <br />
        <br />
        <h4>Phone number</h4>
        <input 
            className='Phone'
            type='text'
            placeholder='Enter your Phone number'
        />
    </div>
    </>
  )
}

export default GeneralInfo