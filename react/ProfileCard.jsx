import React from 'react';

class ProfileCard extends React.Component {
  render() {
    const { profile } = this.props;
    
    return (
      <div className="profile-card">
        <div className="profile-image">
          <img src={profile.avatar} alt={`${profile.name}'s avatar`} />
        </div>
        <div className="profile-info">
          <h2>{profile.name}</h2>
          <p className="title">{profile.title}</p>
          <p className="location">{profile.location}</p>
          <div className="stats">
            <div className="stat">
              <span className="value">{profile.followers}</span>
              <span className="label">Followers</span>
            </div>
            <div className="stat">
              <span className="value">{profile.following}</span>
              <span className="label">Following</span>
            </div>
            <div className="stat">
              <span className="value">{profile.posts}</span>
              <span className="label">Posts</span>
            </div>
          </div>
          <button 
            className="follow-button"
            onClick={(e) => {
              const btn = e.target;
              const isFollowing = btn.textContent.trim() === "Unfollow";
              btn.textContent = isFollowing ? "Follow" : "Unfollow";
            }}
          >
            Follow
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileCard; 