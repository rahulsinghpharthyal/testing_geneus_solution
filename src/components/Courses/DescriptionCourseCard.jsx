import React from 'react';
import './DescriptionCourseCard.css';

const DescriptionCourseCard = ({ courseDetails, discount, handleAddToCart }) => {
  return (
    <div className="course-row">
        <div className="course-col">
        <img
          src={courseDetails?.img}
          alt="Course"
          className="course-image"
          style={{ height: '350px' }}
        />
      </div>
      <div className="course-col">
        <div className="course-body">
          <h2 className="course-title">{courseDetails?.title}</h2>
          <div className="course-details">
            <h6>
              <s>
                &#8377;{courseDetails?.price}
              </s>
              &ensp;{parseInt(discount)}% OFF
            </h6>
            <strong className="course-price">
              &#8377;{courseDetails?.discount_price}
            </strong>
          </div>
          <div style={{textAlign: 'left'}}>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(courseDetails)}
              >
                Add to Cart
              </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DescriptionCourseCard;
