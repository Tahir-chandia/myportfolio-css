"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { MdOutlineMenu } from 'react-icons/md'


const Header = () => {

    const [isClick,setisClick] = useState(false)
    const toggleNavbar =()=>{
      setisClick(!isClick)}

    return (
    <main>

        <header>

            <nav>


        <div  className='img'>
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt='logo' width={150} height={70}/>
          </Link>
        </div>


                 <ul className={`nav-links ${isClick ? 'active' : ''}`}>
                     <li className="nav-item"><Link href="/">Home</Link></li>
                     <li className="nav-item"><Link href="/about">About</Link></li>
                     <li className="nav-item"><Link href="/projects">Projects</Link></li>
                     <li className="nav-item"><Link href="/contact" className='button'>Contact</Link></li>
                 </ul>

                 <button onClick={toggleNavbar} className="menu-button">
                     {isClick ? <IoMdClose className="icon" /> : <MdOutlineMenu className="icon" />}
                 </button>




<div className='button'>
    
    <Link href={"/contact"} className='contactbutton'>
<button className='button'>
    Contact
    </button>
    </Link>
</div>
</nav>
        </header>
    </main>
  )
}

export default Header

