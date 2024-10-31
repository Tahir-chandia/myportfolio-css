import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    
    <div className='hero'>

    <div>
      <Image src={"/man.png"} width={300} height={300} alt='man' className='manimg'/>
    </div>
 
<div className='text'>
    <h3 className='name'>Muhammad Tahir</h3>
    <h2 className='heading'>I am <span>Frontend Developer</span></h2>
    <p className='paragraph'>Crafting seamless user experiences with clean code and creative design.
Building sleek, responsive interfaces.
Turning designs into interactive experiences.
</p>
    <button className='button3'>
        Download CV
    </button>
</div>

    </div>
  )
}

export default Hero
