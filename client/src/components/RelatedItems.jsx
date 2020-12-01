import React from 'react';
import ReactDom from 'react-dom';
import Shoe from './shoe.jsx';

const RelatedItems = (props) => (
  <div class="shoes-row-4">
    {props.related.map((shoe, index) => {
      if (index <= 4) {
        return (
          <Shoe shoe={shoe} shoeClicked={props.shoeClicked} />
        );
      }
    })}
  </div>
);

export default RelatedItems;