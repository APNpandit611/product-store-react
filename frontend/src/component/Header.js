import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex flex-row justify-between gap-5'>
        <div className='m-5'>
          <h1>
            LOGO
          </h1>
        </div>
        <div>
          <ul className='flex flex-row justify-between gap-5 m-5'>
            <li>Men</li>
            <li>Women</li>
            <li>All Proucts</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 w-11/12 mx-auto mb-8" />
    </div>
  )
}

export default Header