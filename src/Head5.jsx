import React from 'react'
import Career1 from './assets/Career1.jfif';
import Career2 from './assets/Career2.jfif';
import Career3 from './assets/Career3.jfif';
function Head5() {
  const data = [
    {
      img: Career1,
      desc: "Career Guidance - Beginner"
    },
    {
      img: Career2,
      desc: "Career Guidance - Intermediate"
    },
    {
      img: Career3,
      desc: "Career Guidance - Advanced"
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

export default Head5