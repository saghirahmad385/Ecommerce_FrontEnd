import React, { Fragment, useEffect } from 'react';
import './productDetails.css';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import ReviewCard from './ReviewCard';

const ProductDetails = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { loading, product, error } = state.productDetails;

  const { id } = useParams();

  const options = {
    edit: false,
    color: 'rgba(20, 20, 20,0.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 20,
    value: product.ratings,
    isHalf: true,
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <div className="productDetails">
        <div className="carousel-Section">
          <Carousel className="carousel">
            {product.images &&
              product.images.map((image, i) => (
                <img
                  className="carouselImage"
                  key={image.url}
                  src={image.url}
                  alt={`${i} slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className="detailsSection">
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>Product No.{product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span>{product.numOfReviews} Reviews</span>
          </div>
          <div className="detailsBlock-3">
            <h1>Rs.{product.price}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input value="1" type="number" />
                <button>+</button>
              </div>
              <button>Add To Cart</button>
            </div>
            <p className={product.stock1 < 1 ? 'redColor' : 'greenColor'}>
              <b>Status:{product.stock < 1 ? 'Out Of Stock' : 'In Stock'}</b>
            </p>
          </div>
          <div className="detailsBlock-4">
            Description:{product.description}
          </div>
          <button className="submitReview">Submit Review</button>
        </div>
      </div>

      <h3 className="reviewsHeading">REVIEWS</h3>

      {product.reviews && product.reviews[0] ? (
        <div className="reviews">
          {product.reviews &&
            product.reviews.map((review) => <ReviewCard review={review} />)}
        </div>
      ) : (
        <p className="noReviews">No Reviews Yet</p>
      )}

      {/* <button
        onClick={() => {
          console.log(product);
        }}
      >
        STATE
      </button> */}
    </Fragment>
  );
};

export default ProductDetails;
