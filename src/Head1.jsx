import React from 'react'
import Course1 from './assets/course1.jpg';
import Head2 from './Head2';
import Head3 from './Head3';
import Head4 from './Head4';
import Head5 from './Head5';
function Head1() {
  return (
    <div>
  <Head2 />
  <Head3 />
  <Head4 />
  <Head5 /> 
  </div>
  );
  // const data = [
  //   {
  //     img: Course1,
  //     desc: "FSD Engineer"
  //   },
  //   {
  //     img: Course1,
  //     desc: "CLOUD Engineer"
  //   },
  //   {
  //     img: Course1,
  //     desc: "AUTO Engineer"
  //   }
  // ];

  // return (
  //   <div className='card-container'>
  //     {
  //       data.map((e, index) => (
  //         <div className="carder" key={index}>
  //           <img src={e.img} alt="Avatar" style={{width:"300px", height:"200px"}} />
  //           <div className="container">
  //             <h4><b>{e.desc}</b></h4>
  //           </div>
  //         </div>
  //       ))
  //     }
  //   </div>
  // );
}

export default Head1