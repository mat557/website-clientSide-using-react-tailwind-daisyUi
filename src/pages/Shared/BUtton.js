import React from 'react';

const BUtton = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-secondary to-primary btn btn-primary text-white font-bold">{children}</button>
    );
};

export default BUtton;