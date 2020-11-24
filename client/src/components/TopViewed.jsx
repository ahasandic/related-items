import React from 'react';
import ReactDom from 'react-dom';
import Shoe from './shoe.jsx';
import axios from 'axios';
import { FiHeart } from 'react-icons/Fi';

const TopViewed = (props) => (
  <div class="shoes-row-4">
    {props.shoes.map((shoe, index) => {
      if (index <= 4) {
        return (
          <Shoe shoe={shoe} shoeClicked={props.shoeClicked}/>
        );
      }
    })}
  </div>
);

export default TopViewed;