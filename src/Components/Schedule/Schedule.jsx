import React from 'react';

const Schedule = (props) => {
    console.log("RENDER");

    return (
        <div>
            {
                props.mas.map((el, count) => <p key={count}>{ el }</p>)
            }
        </div>
    )
}

export default Schedule;