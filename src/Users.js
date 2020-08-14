import React from 'react';
import { useParams } from 'react-router-dom';

const Users = (props) => {
  let { id } = useParams();
  return (
    <div className="container">
      <h1>User!!! {id}</h1>
    </div>
  );
};
export default Users;
