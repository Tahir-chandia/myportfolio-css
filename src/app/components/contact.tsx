
import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <main className='contact' >
      <div>

<h3 className='heading3'>Contact <span className='span3'>Us</span></h3>
      </div>

      <div className="box3">
      <div className="content">
        <div className="left-side">
          <div className="box4">
            <i className="icons2"><FaMapMarkerAlt  /></i>
            <div className="text3">Address</div>
            <div className='text4'>Sindh,Karachi</div>
            
          </div>
          <div className="box4">
            <i className="icons2"><FaPhoneAlt /></i>
            <div className="text3">Phone</div>
            <div className='text4'>03022172137</div>
                 </div>
          <div className="box4">
            <i className="icons2"><MdOutlineEmail /></i>
            <div className="text3">Email</div>
            <div className="text4">tk624444@gmail.com</div>
          </div>
        </div>

        <div className="right-side">
          <div className="topic" >Send us a message</div>
          <p className='paraghaph3'>
            {`If you have any work from me or any types of quries,
             you can send me message from here. It's my pleasure to help you.`}</p>
          <form action="#">
            <div className="input-box2">
              <input type="text" placeholder="Enter your name" className='name3' />
            </div>
            <div className="input-box2">
              <input type="text" placeholder="Enter your email" className='email'/>
            </div>
            <div className="input-box2">
              <textarea className='textarea' placeholder="Enter your message"></textarea>
            </div>
            <div className="buttonbox">
              <input type="button" className='button4' value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Contact
