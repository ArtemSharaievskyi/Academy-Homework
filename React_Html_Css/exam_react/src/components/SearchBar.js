import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Пошук за заголовком..."
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;