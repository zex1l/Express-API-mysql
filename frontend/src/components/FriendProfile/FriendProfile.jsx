import React from 'react';

const FriendProfile = ({user}) => {

    
    return (
        <div className="enemyProfile">
        <div className="container">
            <div className="profile__main">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&       usqp=CAU" alt="" className="profile__img" />
                    <div className="profile__info">
                        <span className="info__item">{user[0].name}</span>
                        <span className="info__item">{user[0].email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendProfile;