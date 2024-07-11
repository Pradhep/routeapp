import React from 'react';
import FSD1 from './assets/FSD1.jfif';
import FSD2 from './assets/FSD2.png';
import FSD3 from './assets/FSD3.jfif';

function Head2() {
  const data = [
    {
      img: FSD1,
      desc: "Python Full Stack Development Course"
    },
    {
      img: FSD2,
      desc: "Java Full Stack Development Course"
    },
    {
      img: FSD3,
      desc: "Javascript Full Stack Development Course"
    }
  ];

  return (
    <div className='card-container'>
      {
        data.map((e, index) => (
          <div className="carder" key={index}>
            <img src={e.img} alt="Avatar" style={{width:"300px", height:"200px"}}/>
            <div className="container">
              <h4><b>{e.desc}</b></h4>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Head2;