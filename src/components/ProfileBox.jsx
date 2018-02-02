import React, { Fragment } from 'react';
// import Avatar from './Avatar';
import ProfileInfo from './ProfileInfo';
import StuffILike from './StuffILike';

function ProfileBox(props){
    return(
        <Fragment>
            <p>Hi,</p>
            <p>I like Stuff like: </p>
            <ProfileInfo stuff = {StuffILike}/>
        </Fragment>
    )
}

export default ProfileBox;