import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './ReviewCard.css';

const profileImage =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit';

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: 'rgba(20, 20, 20,0.1)',
    activeColor: 'tomato',
    size: window.innerWidth < 600 ? 20 : 20,
    value: review.ratings,
    isHalf: true,
  };
  return (
    <div className="reviewCard">
      <img src={profileImage} alt="User" className="reviewImage" />
      <p>{review.name}</p>
      <ReactStars {...options} />
      <span>{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
