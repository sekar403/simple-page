import React from 'react'

function Backdrop(props) {
  return (
    <div className='transition duration-300 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40' onClick={props.onClick}></div>
  )
}

export default Backdrop