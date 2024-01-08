
import React from 'react';

// Define a component called basicInfo, shows information about a person.
// takes person object as 'props'.
const BasicInfo = ({ person }) => (
  <div className="App">
    <h1 className="name">{person.name}</h1>
    <h2>{person.title}</h2>
    <p>{person.phoneNumber}</p>
  </div>
);
export default BasicInfo;
