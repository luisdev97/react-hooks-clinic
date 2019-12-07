import React from 'react';

const Appoinment = ({ data }) => {
    const { pet, owner, date, hour, symptom } = data;

    return (
        <div className="cita">
            <p>Pet: <span>{ pet } </span></p>
            <p>Owner: <span> { owner } </span></p>
            <p>Date: <span>{ date } </span></p>
            <p>Hour: <span> { hour} </span></p>
            <p>Symptom: <span> { symptom }</span></p>
        </div>
    );
};

export default Appoinment;