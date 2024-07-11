import React from 'react'
import CYB1 from './assets/CYB1.jfif';
import CYB2 from './assets/CYB2.jfif';
import CYB3 from './assets/CYB3.jfif';
function Head4() {
  const data = [
    {
      img: CYB1,
      desc: "Cyber Security Course - Beginner"
    },
    {
      img: CYB2,
      desc: "Cyber Security Course - Intermediate"
    },
    {
      img: CYB3,
      desc: "Cyber Security Course - Advanced"
    }
  ];

  return (
    <div className='card-container'>
      {
        data.map((e, index) => (
          <div className="carder" key={index}>
            <img src={e.img} alt="Avatar" style={{width:"300px", height:"200px"}} />
            <div className="container">
              <h4><b>{e.desc}</b></h4>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Head4