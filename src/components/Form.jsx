import React, { useState } from 'react';

const Form = () => {

    const [ appointment, setAppointment ] = useState({
        pet: '',
        owner: '',
        hour: '',
        date: '',
        symptom: ''
    });

    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }


    return (
        <div>
            <form>


                <label>Pet name</label>
                <input type="text"
                  name="pet" 
                  className="u-full-width"
                  placeholder="Pet name"
                  onChange={ handleChange }
                  />

                <label>Owner name</label>
                <input type="text"
                  name="owner" 
                  className="u-full-width"
                  placeholder="Owner name"
                  onChange={ handleChange }
                  />    
                  

                <label>Date</label>
                <input type="date"
                  name="date" 
                  className="u-full-width"
                  onChange={ handleChange }
                  /> 


                <label>Hour</label>
                <input type="time"
                  name="hour" 
                  className="u-full-width"
                  onChange={ handleChange } 
                  /> 

                <label>Symptom</label>
                <textarea
                className="u-full-width"
                name="symptom"
                onChange={ handleChange }
                  />



                <button type="submit" className="button-primary u-full-width">Save </button>
                      
            </form>

            
        </div>
    );
};

export default Form;