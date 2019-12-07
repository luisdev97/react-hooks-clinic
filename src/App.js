import React, { useState } from 'react';
import Form from './components/Form';


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

          <div className="one-half column">

          </div>

        </div>

      </div>
    </>
  );
};

export default App;
