import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import Aboute from './components/Aboute/Aboute'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contect from './components/Contect/Contect'


const App = () => {
  return (
    <div>
      <Navbar/>
       <Background/>
      <div className='container'>
        <Title subTitle='OUR PROGRAM'
         title='What We offer'/>
           <Programs/>
           <Aboute/>
           <Title subTitle='Gallery'
         title=' Campus Photo'/>
         <Campus/>
         <Title subTitle='TESTIMONIAL'
         title='What Student Says'/>
         <Testimonial/>
         <Title subTitle='Contact Us '
         title='Get In Touch'/>
         <Contect/>
      </div>
       
    </div>
  )
}

export default App
