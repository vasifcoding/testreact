/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function NotFoundView() {
    const navigate = useNavigate()
    useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
    }, [])
  return (
    <div>
      Sayfa bulunamadi , Yeniden yonlendiriliyorsunuz...
    </div>
  )
}

export default NotFoundView
