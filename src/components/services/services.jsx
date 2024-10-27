import React from 'react';
import './services.css';
import theme from "../../assets/theme.svg";
import Services_Data from '../../assets/Services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={theme} alt="Theme decoration" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
              <p>Read more</p>
              <img src={arrow_icon} alt="Arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;