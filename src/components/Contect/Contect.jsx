import React from 'react'
import './Contect.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contect = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4ebd5e3-896a-4aaa-8f2d-a79212de4bc8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contect'>
      <div className="contect-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact from or find our contact information below .Your feedback ,question ,
          and suggestions are important to us as we srive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
          <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li> <img src={location_icon} alt="" />77 Massachusetts Ave,Cambridge <br /> MA 02139, United states </li>
        </ul>
      </div>
      <div className="contect-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input type="text"name='name' placeholder='Enter your name' />
          <label htmlFor="">Phone Number</label>
          <input type="tel"name='phone' placeholder='Enter your mobile number' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows="6" placeholder='enter your message'></textarea>
          <button type='submit ' className=' btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          

        </form>
        <span>{result} </span>
      </div>
    </div>
  )
}

export default Contect
