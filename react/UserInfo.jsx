import React from 'react';

class UserInfo extends React.Component {
  render() {
    const { user } = this.props;
    
    return (
      <div className="user-info">
        <h2>User Information</h2>
        <div className="user-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>City:</strong> {user.city}</p>
        </div>
      </div>
    );
  }
}

export default UserInfo; 