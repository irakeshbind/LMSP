import React from 'react'

function Signup() {
  return (
    <div className='signup-wrapper'>
        <div className='signup-box'>
            <div className='signup-left-box'>
                 <img alt='books' src={require('../component/assets/yup.png')}/>
                 <h1>SBS  Online Classes</h1>
                 <p>Learn Coding in Easy way ...</p>
            </div>
            <div className='signup-right-box'>
            <h2>Create Your Account</h2>
            {/* <hr/> */}
            <input required placeholder='Full Name'/>
            {/* <input required placeholder='About Me'/> */}
            <textarea placeholder='About Me...' style={{ height:100, borderRadius:5, padding:10, fontSize:15,outline:'none'}}/>
            <input required placeholder='higest qualification'/>
            <input required type='email' placeholder='Experience'/>
            <input required placeholder='Email'/>
            <input required placeholder='phone'/>
            <input required type='password' placeholder='Password'/>
            <input required type='password' placeholder='ConfirmPassword'/>
            {/* <input type='file' /> */}
            <div className='upload-profile'>
              <button className='upload-profile-btn'>upload profile pic</button>
              <img alt='profile pic' src={require('./assets/po.jpg')}/>
            </div>
            <input className='submit-btn' type='submit'/>
           
            </div>

        </div>
    </div>
  )
}

export default Signup