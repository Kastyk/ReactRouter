import React from 'react';

const Users = (props) => {
  return (
    <div className="container">
      <h1>User!!! {props.match.params.id}</h1>
    </div>
  );
};
export default Users;
