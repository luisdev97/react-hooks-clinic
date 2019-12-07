import React, { useState } from 'react';
import Form from './components/Form';
import AppoinmentsList from './components/AppoinmentsList';

const App = () => {

  const [ appoinments , setAppoinments ] = useState([]);

  const addAppoinment = appoinment => {
    const updatedAppoinments = [...appoinments, appoinment];
    setAppoinments(updatedAppoinments); 
  }

  return (
    <>
      <h1>Patient manager</h1>
      <div className="container">
        <div className="row">

          <div className="one-half column">
              <Form addAppoinment={ addAppoinment }/>
          </div>

          <AppoinmentsList appoinments={ appoinments }/>

        </div>

      </div>
    </>
  );
};

export default App;
