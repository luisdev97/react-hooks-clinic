import React, { useState } from 'react';

const Form = ({ addAppoinment }) => {

    const initialState = {
        pet: '',
        owner: '',
        hour: '',
        date: '',
        symptom: ''
    }

    const [ appointment, setAppointment ] = useState(initialState);

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        //set App state
        addAppoinment(appointment);
        //reset form
        setAppointment(initialState);
    }


    return (
        <div>
            <form onSubmit={ handleSubmit }>


                <label>Pet name</label>
                <input type="text"
                  name="pet" 
                  className="u-full-width"
                  placeholder="Pet name"
                  value={ appointment.pet }
                  onChange={ handleChange }
                  />

                <label>Owner name</label>
                <input type="text"
                  name="owner" 
                  className="u-full-width"
                  placeholder="Owner name"
                  value={ appointment.owner }
                  onChange={ handleChange }
                  />    
                  

                <label>Date</label>
                <input type="date"
                  name="date" 
                  className="u-full-width"
                  value={ appointment.date }
                  onChange={ handleChange }
                  /> 


                <label>Hour</label>
                <input type="time"
                  name="hour" 
                  className="u-full-width"
                  value={ appointment.hour }
                  onChange={ handleChange } 
                  /> 

                <label>Symptom</label>
                <textarea
                className="u-full-width"
                name="symptom"
                value={ appointment.symptom }
                onChange={ handleChange }
                  />



                <button type="submit" className="button-primary u-full-width">Save </button>
                      
            </form>

            
        </div>
    );
};

export default Form;