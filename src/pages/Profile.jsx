
import { useState, useContext } from 'react';
import { UserProvider, UserContext } from '../contexts/UserContext';

export default function Profile() {
   const { user } = useContext(UserContext);
  return (
    <div>
      <h3>Profile</h3>
      <span>{user}</span>
    </div>
  );
}
