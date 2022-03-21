import React, { Fragment, useState } from 'react';
import './Search.css';
import { getProducts, clearError } from '../../actions/productAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Form is submitted');
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Enter something here"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <input type="submit" value="Search" />
      </form>
      <button
        onClick={() => {
          console.log(keyword);
        }}
      >
        Keyword
      </button>
    </Fragment>
  );
};

export default Search;
