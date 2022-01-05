import React from 'react';
const Temp = (props) => {
  // console.log(props.data)

  return (
    <div className='temp-container'>
      {props.data.map((values, i)=>
        <div key={`values.title-${i}`} className='temp-sl'>
          <h1>{values.title}</h1>
          <img className='temp' src={values.imgUrl} alt="" />
          <div className='provider'>
            <img className='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg'/>
            <img className='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg'/>
            <img className='provider-thumbnail' src='https://www.themoviedb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg'/>
          </div>
        </div>

      )}
    </div>
  );
};

export default Temp;