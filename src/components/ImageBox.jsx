import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

function ImageBox(props){
    return (
        <div className="image-box">
                <img
                    src="http://i0.kym-cdn.com/entries/icons/original/000/006/026/NOTSUREIF.jpg"
                    alt=""
                    className="main-img"
                />
            <Avatar message="This is my message cuz" blah="this is blah"/>
            <UserInfo
                user={
                    {
                    name: 'John',
                    handle: 'John_Doe'
                }
            } 
            />
        </div>
    )
}

export default ImageBox;