import React from 'react';

const Input = ({ updateValue, value }) => 
  <textarea rows="22" className="form-control" onChange={updateValue} value={value} />;

export default Input;