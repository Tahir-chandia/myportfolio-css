
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const AboutMe = () => {
    return (
        <div>

            <div className='aboutmesection'>

                <div className='man2img'>
                    <Image src={"/man-2.png"} width={350} height={400} alt='man' />
                </div>

                <div className='mydiv'>
                    <h4 className='name2'  >I am  Muhammad Tahir</h4>
                    <h2 className='aboutme'>About <span>Me</span></h2>
                    <p className='paragraph2'>
                        
                        
                        
                        {`I'm a passionate frontend developer with a keen eye for design and a
                         commitment to creating seamless digital experiences. I specialize in building responsive, user-friendly interfaces that bring ideas to
                        life through clean and efficient code. With a strong foundation in HTML, CSS, TailwindCSS,Typescript,JavaScript, and modern frameworks like Nextjs, I bridge the gap between design and technology, ensuring that every project not only looks great but also 
                        performs flawlessly.`}
                    </p>

                    <div className='socialIcons'>
                    <Link href={"https://github.com/Tahir-chandia"} target='_blank' className='icons'>
                    <IoLogoGithub />
                    </Link>
            
                    <Link href={"https://www.linkedin.com/in/muhammad-tahir-567a8a2b6/"} target='_blank'  className='icons'>
                    <IoLogoLinkedin />
                    </Link>
            
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
