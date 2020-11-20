import React from 'react';
import ReactDom from 'react-dom';

const Shoe = (props) => {
  return (
    <div class="column">
      <div class="shoe">
        <div class="shoe-img-container">
          {/* <span class="heart-icon"> &#9825;</span> */}
          <img src={props.shoe.currentShoePictures[0]}/>
        </div>
        <a class="shoe-link">
          <span class="product-name">
            <span class="shoe-name">{props.shoe.shoeName}</span>
            <span class="shoe-gender">{props.shoe.gender}</span>
          </span>
          <div class="price">{props.shoe.price}</div>
        </a>
      </div>
    </div>
  );

};

export default Shoe;