import '../styles/prof-cards.scss'

export default function ProfileCard(props) {
    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-image">
                    <img src={props.avatar} alt={`${props.name}'s avatar`}/>
                </div>
                <div className="profile-head">
                    <h2>{props.name}</h2>
                    <p>{props.title}</p>
                </div>
            </div>
            <div className="profile-info">
                <p>{props.bio}</p>
                <h3>Contact</h3>
                <div className="profile-contact">
                    <p>Phone: {props.phone}</p>
                    <p>Email: <a href=''>{props.email}</a></p>
                </div>
            </div>
            <button 
                className="follow-button"
                onClick={(e) => {
                    const btn = e.target;
                    const isFollowing = btn.textContent === "Unfollow";
                    btn.textContent = isFollowing ? "Follow" : "Unfollow";
                    console.log(`${isFollowing ? 'Unfollowing' : 'Following'} ${props.name}`);
                }}
            >
                Follow
            </button>
            <div className="copyright">
                <p>Copyright <em>{props.name}</em></p>
            </div>
      </div>
    )
}   




