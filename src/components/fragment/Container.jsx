import React from 'react';
import '../assets/css/Container.css';

const Container = ({children}) => {
    return (
        <div className={"Container"}>
            {children}
        </div>
    );
}

export default Container;