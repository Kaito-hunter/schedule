import React from 'react';

const User = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong>
      <p>{user.username}</p>
    </li>
  );
};

export default User;
