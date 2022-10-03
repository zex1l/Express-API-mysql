import { Link } from "react-router-dom";

const FriendsList = ({friends}) => {
    return (
        <>
            {friends.map(friend => {
                return(
                    <div key={friend.id}>
                        <Link to={`/enemy_profile/${friend.id}`} className="friends__item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-REr89iWROi6ScePs5agSIHpG9BPBDDZ_g&       usqp=CAU" alt="" className="friends__img" />
                         </Link>
                    <div className="friends__info">
                        <span className="friends__name">{friend.name}</span>
                        
                    </div>
                    </div>
                )
            })}
            
        </>
    );
};

export default FriendsList;