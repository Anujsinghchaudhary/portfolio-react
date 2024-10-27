import React from 'react';
import './mywork.css';
import theme from '../../assets/theme.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme} alt="Theme" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={`Work ${index + 1}`} />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
}

export default MyWork;