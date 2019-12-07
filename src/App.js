import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import AppoinmentsList from './components/AppoinmentsList';

const App = () => {

  let initialAppoinments = JSON.parse(localStorage.getItem('appoinments'));

  if(!initialAppoinments)
    initialAppoinments = []
  
    

  const [ appoinments , setAppoinments ] = useState(initialAppoinments);


  const addAppoinment = appoinment => {
    const updatedAppoinments = [...appoinments, appoinment];
    setAppoinments(updatedAppoinments); 
  }


  const removeAppoinment = index => {
      const updatedAppoinments = [...appoinments];
      updatedAppoinments.splice(index, 1);
      setAppoinments(updatedAppoinments);
  }


  useEffect(() => {
    let initialAppoinments = JSON.parse(localStorage.getItem('appoinments'));
    if(initialAppoinments)
      localStorage.setItem('appoinments', JSON.stringify(appoinments));
    else
      localStorage.setItem('appoinments', JSON.stringify([]));
  },[appoinments]);


  return (
    <>
      <h1>Patient manager</h1>
      <div className="container">
        <div className="row">

          <div className="one-half column">
              <Form addAppoinment={ addAppoinment }/>
          </div>

          <AppoinmentsList removeAppoinment={ removeAppoinment } appoinments={ appoinments }/>

        </div>

      </div>
    </>
  );
};

export default App;
