import React, { Fragment, useEffect, useState } from 'react';
import MouseIcon from '@mui/icons-material/Mouse';
import './Home.css';
import ProductCard from './ProductCard.js';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getProducts } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader.js';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, error, products, productCount, resultPerPage } =
    state.products;

  const consoleProductState = () => {
    console.log(loading, error, products, productCount);
    // console.log(state.products.productCount);
  };
  const keyword = '';
  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log('page number is changed');
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  useEffect(() => {
    dispatch(getProducts(keyword, currentPage));
    console.log(state);
  }, [dispatch, currentPage]);
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll Down <MouseIcon />
          </button>
        </a>

        <button onClick={consoleProductState}>PRODUCTS</button>
      </div>
      <h2 className="homeHeading">Featured Products!</h2>
      <div className="container" id="container">
        {(() => {
          if (loading) {
            return <Loader />;
          } else if (products) {
            return products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ));
          } else if (error) {
            return alert.error(error);
          }
        })()}
      </div>
      <div className="filterBoxHome">
        <Typography>PRICE</Typography>
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={25000}
        />
      </div>
      {productCount > resultPerPage && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
