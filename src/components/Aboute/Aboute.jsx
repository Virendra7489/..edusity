import React from 'react'
import './Aboute.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const Aboute = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY </h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey our  university's
           comprehensive education program . Our cutting-edge curriculum is 
           designed to empower students with the knowledge ,akills, and experience 
           needed to excel in the dynamic field of  education.
        </p>
        <p>
            With a focus on innovation , hands-on learning ,and personalized mentorship , our programs prepare aspiring educators
            to make a meaningful impact in classroom , school , and communities.
        </p>
        <p>
            Whether you aspire to become a teacher , adminidtatore, counselor ,or educational leader ,our diverse range of program
            offers the perfect pathway to achieve your goale and unlock your full potential in shaping  the future of educational . 
        </p>
      </div>
    </div>
  )
}

export default Aboute
