import React from 'react';
import './TopThree.css';

const medalColors = ['gold', 'silver', '#cd7f32']; 

const TopThree = ({ users }) => {
  return (
    <div className="row justify-content-center top-three-container mb-4">
      {users.map((user, i) => (
        <div key={user.id} className="col-md-3 col-sm-6 mb-3">
          <div className="top-card text-center" style={{ backgroundColor: medalColors[i] }}>
            <div className="crown">👑</div>
            <img src={`https://i.pravatar.cc/100?img=${user.id}`} alt="avatar" className="profile-pic" />
            <h5 className="username">{user.name}</h5>
            <p className="userid">ID: #u{user.id}</p>
            <div className="points">🔥 {user.points}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopThree;
