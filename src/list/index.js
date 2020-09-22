import React, { useEffect, useState } from 'react';

import User from './user';

function List() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      response.json().then((data) => {
        setUser(data);
      });
    });
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
}

export default List;
