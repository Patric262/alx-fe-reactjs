import React from 'react';

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{age}</span></p>
      <p style={{ fontStyle: 'italic' }}>Bio: {bio}</p>
    </div>
  );
}
export default UserProfile;
