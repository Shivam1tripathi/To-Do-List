import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main className='bg-blue-200' style={{minHeight:"80vh"}}>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout