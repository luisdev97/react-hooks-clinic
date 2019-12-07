import React from 'react';

const Form = () => {
    return (
        <div>
            <form>


                <label>Pet name</label>
                <input type="text"
                  name="pet" 
                  className="u-full-width"
                  placeholder="Pet name"
                  />

                <label>Owner name</label>
                <input type="text"
                  name="owner" 
                  className="u-full-width"
                  placeholder="Owner name"
                  />    
                  

                <label>Date</label>
                <input type="date"
                  name="date" 
                  className="u-full-width"
                  /> 


                <label>Hour</label>
                <input type="time"
                  name="hour" 
                  className="u-full-width"
                  /> 

                <label>Symptom</label>
                <textarea
                className="u-full-width"
                name="symptom"
                  />



                <button type="submit" className="button-primary u-full-width">Save</button>
                      
            </form>

            
        </div>
    );
};

export default Form;