import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <main>
              <footer className='footer'>
                <div className='footerbox'>

            <Image className="footer-logo" src="/logo.svg" width={150} height={50}  alt="logo" />
                </div>
            
            <div className="copyright">
                Copyright 2024 © My portfolio
            </div>
        </footer>
    </main>
  )
}

export default Footer
