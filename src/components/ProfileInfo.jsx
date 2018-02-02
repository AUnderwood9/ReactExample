import React, { Fragment } from 'react';

function ProfileInfo(props){
    console.log(props.stuff[0]);
    return (
        <Fragment>
            {/* <p>Insert stuff here</p> */}
            {props.stuff.map(
                (item, index) => {
                    return <p key={index}>{item}</p>;
                }
                
            )}
            
        </Fragment>
    );
}

export default ProfileInfo;