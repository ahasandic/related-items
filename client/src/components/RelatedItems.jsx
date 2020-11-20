import React from 'react';
import ReactDom from 'react-dom';
import Shoe from './shoe.jsx';

const RelatedItems = (props) => (
  <div class="shoes-row">
    {props.shoes.map((shoe, index) => {
      if (index <= 4) {
        return (
          <Shoe shoe={shoe}/>
        );
      }
    }
    )}
  </div>
);

export default RelatedItems;