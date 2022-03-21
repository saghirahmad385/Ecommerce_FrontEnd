import React, { Fragment, useState, useEffect } from 'react';
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, clearError } from '../../actions/productAction';
import Loader from '../Loader/Loader.js';
import ProductCard from '../Home/ProductCard.js';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, error, products, productCount, resultPerPage } =
    state.products;

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log('page number is changed');
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const { keyword } = useParams();

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, price));
  }, [dispatch, keyword, currentPage, price]);

  return (
    <Fragment>
      <h1 className="heading">PRODUCTS</h1>
      <div className="container1" id="container">
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
      <div className="filterBox">
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
      <button
        onClick={() => {
          console.log(productCount);
        }}
      >
        Click me
      </button>
    </Fragment>
  );
};

export default Products;
