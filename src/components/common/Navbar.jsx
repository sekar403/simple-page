import React from 'react'
import Logo from './Logo'
import Timer from './Timer'
import { NavLink } from 'react-router-dom'
import ReactLogo from './../../images/logo-with-text.svg';
import ReactLogoa from './../../images/logo.svg';
import { useState } from 'react'




function Navbar() {
  const [modalIsOpen, setModalOpen] = useState(false);
  function navBarHandler() {
    if (modalIsOpen === true) {
      setModalOpen(false);
    } else {
      setModalOpen(true);
    }
  }
  function closeNavBarHandler() {
    setModalOpen(false);
  }
  return (
    <nav className="bg-white ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <NavLink to="/" className="flex items-center py-4 px-2">
                <Logo className="sm:hidden" href={ReactLogoa} alt="Test" width="40px" height="40px" />
                <Logo className="hidden sm:block" href={ReactLogo} alt="Test" width="200px" height="40px" />


              </NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" className="py-4 px-2 text-black-500 font-semibold ">Home</NavLink>
              <NavLink to="post" className="py-4 px-2 text-black-500 font-semibold hover:text-black-700 transition duration-300">Posts</NavLink>
            </div>
          </div>
          <div id="classtimer" className="hidden md:flex items-center space-x-3 ">
            <div>
              <Timer />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={navBarHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-grey"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>
      {modalIsOpen &&
        <div className='container m-3'>
          <ul className="">
            <li className="active"><NavLink to="/" className="block text-sm px-2 py-2 hover:font-semibold transition duration-300" onClick={closeNavBarHandler}>Home</NavLink></li>
            <li><NavLink to="post" className="block text-sm px-2 py-2 hover:font-semibold transition duration-300" onClick={closeNavBarHandler}>Post</NavLink></li>
          </ul>
        </div>
      }


    </nav>

  )
}

export default Navbar