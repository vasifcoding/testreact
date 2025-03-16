// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './views/HomeView'
import './App.css'
import About from './views/AboutView'
import ROUTES from './routes'
import Header from './components/Header'
import Services from './views/ServicesView'
import NotFoundView from './views/NotFoundView'
import WebService from './components/WebService'
import MobileApp from './components/MobileApp'
import DesktopApp from './components/DesktopApp'
import BlogsView from './views/BlogsView'
import Blog from './views/Blog'

function App() {


  return (
    <>
     <Header />
    <Routes>
   
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.BLOGS} element={<BlogsView />} />
      <Route path={`${ROUTES.BLOGS}/:blogId`} element={<Blog />} />
      <Route path={ROUTES.SERVICES} element={<Services />} >
        <Route path={ROUTES.WEBSERVICE} element={<WebService />} />
        <Route path={ROUTES.MOBILESERVICE} element={<MobileApp />} />
        <Route path={ROUTES.DESKTOPSERVICE} element={<DesktopApp />} />
      </Route>
      <Route path={ROUTES.NOWAY} element={<NotFoundView/>} />
      {/* <Route path="/about" element={} />
      <Route path="/services" element={} />
      <Route path="/contact" element={} /> */}
     
    </Routes>
    </>
  )
}

export default App
