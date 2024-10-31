
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div>
                <section  className="projects">
            <div >
                <h1 className="heading2"><span>My</span> Projects</h1>
                <p className='paragrapghline'>We provide high standar clean website for your business solutions</p>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="overlay">
                            <div>
                            <h4 className='text2 '>
                                Project-01        </h4>
                            <Link href={"https://milestone1-2-seven.vercel.app/"}
                             target='_blank' className='link'>
                            <span className='span2'>Static Resume Website
                            </span>
                            </Link>
                            </div>
                        </div>
                        <Image src={"/project-1.png"} alt="image" width={300} height={200} 
                        className='image'/>
                    </div>

                    <div className="card">
                        <div className="overlay">
                        <div>
                            <h4 className='text2'>
                                Project-02     </h4>
                            <Link href={"https://young-tour-website.vercel.app/"} target='_blank' className='link'>
                            <span className='span2'>Yound Tour Website
                            </span>                            
                            </Link>
                                </div>
                        </div>
                        <Image src={"/project-2.png"}
                         alt="image" width={300} height={200} className='image'/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                        <div>
                            <h4 className='text2'>
                                Project-03       </h4>
                            <Link href={"https://furnio-website.vercel.app/"} target='_blank' className='link'>
                            <span className='span2'>E-commerce Furnio Website
                            </span>
                            </Link>
                            </div>
                        </div>
                        <Image src={"/project-3.png"} alt="image" width={300} 
                        height={200} className='image'/>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects


