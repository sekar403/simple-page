import React from 'react'
import MediaQuery from 'react-responsive'


export const Home = () => {
  return (
    <div className='container mx-auto pr-3 pl-3'>
                <MediaQuery minDeviceWidth={1224} >
                <h1>Trial Leason [Grade 1-3]</h1>
                </MediaQuery>
                <MediaQuery minResolution='2dppx'>
                <h1>Please use your Desktop or Laptop to start with the Trail Class</h1>
                </MediaQuery>
        
        
    </div>
  )
}
