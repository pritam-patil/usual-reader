import React from 'react';
import './searchField.scss';

const SearchField = props => {
  const { disabled, value, onChange } = props;
  return (
    <input
      className="searchField"
      disabled={disabled}
      placeholder="Enter URL"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchField;
