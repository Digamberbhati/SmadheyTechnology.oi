import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   
<footer className='bg-background-500 text-text'>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to="#" className="flex items-center">
                  {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">
                    Smadhey Technology </span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <Link to="/services" className="hover:underline">Services</Link>
                      </li>
                      <li>
                          <Link to="/contact" className="hover:underline">Contact</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <Link to="#" className="hover:underline">Instagram</Link>
                      </li>
                      <li>
                          <Link to="#" className="hover:underline">Facebook</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                  <ul className="font-medium">
                      <li className="mb-4">
                          <Link to="#" className="hover:underline">Privacy Policy</Link>
                      </li>
                      <li>
                          <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm sm:text-center">© 2023 <Link to="#" className="hover:underline"> <span className='font-bold'>  Smadhey Technology </span></Link>. All Rights Reserved. | Designed & Developed by <Link to="https://greatertechhub.com" target='_blank' className="hover:underline font-bold">GreaterTechHub</Link>
          </span>
          
      </div>
    </div>
</footer>

  )
}

export default Footer
