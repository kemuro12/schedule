import React from 'react';
import preloader from './../../../preloader.gif';

const Preloader = (props) => {
    return (
        <div>
            <img alt="pre-loader" src={preloader} />
        </div>
    )
}

export default Preloader;