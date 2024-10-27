import React, { useState } from 'react';
import './contact.css';
import theme from '../../assets/theme.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7ccd4ca-b2d0-4324-b7a3-8a35f3b42ec4");

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
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>I am available for new projects. Feel free to contact me.</p>
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>anujsinghchaudhary07@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={call_icon} alt="" />
            <p>+916396542978</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>Currently studying at university in Dehradun, Uttrakhand</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="text" placeholder="E-Mail I.D." />
          <textarea className="textarea" placeholder="Enter message"></textarea>
          <center><button className="submit">Submit</button></center>
        </form>
      </div>
    </div>
  );
};

export default Contact;