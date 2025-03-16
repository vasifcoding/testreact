import React from 'react'
import { Outlet } from 'react-router-dom'

function ServicesView() {
  return (
    <div className='flex'>
      <span className='mr-2'>Services </span> - <span className='ml-3'> <Outlet/></span>
    </div>
  )
}

export default ServicesView
