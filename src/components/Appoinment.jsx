import React from 'react';

const Appoinment = ({ data, index, removeAppoinment }) => {

    const { pet, owner, date, hour, symptom } = data;
    
    return (
        <div className="cita">
            <p>Pet: <span>{ pet } </span></p>
            <p>Owner: <span> { owner } </span></p>
            <p>Date: <span>{ date } </span></p>
            <p>Hour: <span> { hour} </span></p>
            <p>Symptom: <span> { symptom }</span></p>
            <button 
            onClick={ () => { removeAppoinment(index) }}
            className="button eliminar u-full-width">Delete appoinment</button>
        </div>
    );
};

export default Appoinment;