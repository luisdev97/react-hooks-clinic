import React from 'react';
import Appoinment from './Appoinment';

const AppoinmentsList = ({ appoinments = [] }) => {

    const renderAppoinments = appoinments => {
       return appoinments.map((appoinment, index) => <Appoinment key={ index } index={ index } data={ appoinment }/>)
    }

    return (
        <div className="one-half column">
            { renderAppoinments(appoinments) }
        </div>
    );
};

export default AppoinmentsList;