import React, { Fragment } from 'react';

function UserInfo(props){
    console.log(`User props`, props);
    return (
        <Fragment>
            <p>{ props.user.name }</p>
            <p>{ props.user.handle }</p>
        </Fragment>
    );
}

export default UserInfo;