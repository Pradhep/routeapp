import React from 'react'
import DTS1 from './assets/DTS1.jfif';
import DTS2 from './assets/DTS2.jfif';
import DTS3 from './assets/DTS3.jfif';
function Head3() {
  const data = [
    {
      img: DTS1,
      desc: "Data Analytics Course Using Python"
    },
    {
      img: DTS2,
      desc: "Power BI and Tableu for Data Engineer"
    },
    {
      img: DTS3,
      desc: "Big Data Analytics Advanced Course"
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

export default Head3