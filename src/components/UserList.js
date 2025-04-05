import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className="list-group">
      {users.map(user => (
        <div key={user.id} className="list-group-item d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <img
              src={`https://i.pravatar.cc/40?img=${user.id}`}
              alt="avatar"
              className="rounded-circle"
              width="40"
              height="40"
            />
            <div>
              <div style={{ fontWeight: 'bold' }}>#{user.rank} {user.name}</div>
              <div style={{ fontSize: '12px', color: 'gray' }}>ID: #u{user.id}</div>
            </div>
          </div>
          <div className="fw-bold text-danger">🔥 {user.points}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
