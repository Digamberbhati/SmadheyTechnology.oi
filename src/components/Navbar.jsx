import React, { useState } from 'react'
import { TfiClose, TfiMenu } from 'react-icons/tfi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
   <>
   <nav className='   bg-background-50 text-background-500 sm:px-5 px-3 flex justify-between items-center   z-50 fixed top-0 left-0 w-full '>
 <Link to="/">  
  <img src="/logo.svg" alt="" className='h-16 object-cover' />
  </Link>
  
    <Link 
      onClick={() => setMenuOpen(!menuOpen)} 
      className='sm:text-2xl  font-bold  flex items-center justify-center gap-1 group relative   '
    >
      {/* <span className='text-[2.5vw] flex items-center justify-center'>•</span> */}
      <span className='text-[2.5vh] sm:text-2xl'>
        {menuOpen ? <TfiClose /> : <TfiMenu />}
      </span>
     
    </Link>
   </nav>
   <div 
     className={`fixed inset-x-0 bg-background text-text z-40 flex items-center justify-center transition-all duration-[1s] ease-in-out  ${
       menuOpen ? 'top-0 bottom-0' : 'top-[-100%] bottom-[100%]'
     }`}
   >
     
        <div className='w-full h-full bg-background-500 flex items-center justify-center '>

            <div className='sm:w-1/2 w-full h-full hidden sm:flex items-center justify-center  px-48 py-24'>
                <div className="box h-full w-full flex items-center justify-center ">
                    <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfDF8MHx8fDA%3D" alt="logo" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='sm:w-1/2 h-full flex items-center justify-center '>
            <ul className=' sm:text-[6.6vw] sm:leading-[6.6vw] text-[8vh] leading-[8vh] '>
            {[
              { path: '/', label: 'HOME' },
              { path: '/about', label: 'ABOUT' },
              { path: '/services', label: 'SERVICES' },
             
              { path: '/contact', label: 'CONTACT' }
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)} 
                  className={`hover:opacity-50 transition-opacity flex items-start justify-start ${
                    isActive(path) ? 'before:content-["●"] before:mr-2 before:text-text before:sm:text-[1.5vw] before:text-[2vh]' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
            </div>
        
        </div>
        
   </div>
   </>
  )
}

export default Navbar
