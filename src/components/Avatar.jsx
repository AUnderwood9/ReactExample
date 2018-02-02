import React from 'react';

function Avatar(props){
    console.log(`avatar props ${props.blah}`);
    return <p>{props.message}</p>
}

export default Avatar;