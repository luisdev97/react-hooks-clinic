import React from 'react';
import Appoinment from './Appoinment';

const AppoinmentsList = ({ appoinments = [], removeAppoinment }) => {

    const title = appoinments.length === 0 ? 'Withouts appoinments' : 'Appoinments';
    const renderAppoinments = appoinments => {
       return appoinments.map((appoinment, index) => 
            <Appoinment 
                key={ index } 
                index={ index } 
                data={ appoinment }
                removeAppoinment={ removeAppoinment }/>)
    }
    return (
        <div className="one-half column">
            <h2>{ title }</h2>
            { renderAppoinments(appoinments) }
        </div>
    );
};

export default AppoinmentsList;