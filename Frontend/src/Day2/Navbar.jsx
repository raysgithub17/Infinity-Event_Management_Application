import React from 'react'
import * as gi from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 md:p-3"> {/* Reduced padding here */}
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <div style={{ fontSize: 25 }}><gi.GiInfinity /></div>
            <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">INFINITY</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium md:p-0 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link to="/">
                <li>
                  <button className="p-1 mr-5 rounded-sm text-sm border-2 border-black text-black font-semibold hover:bg-black hover:text-white" aria-current="page">LOGOUT</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
