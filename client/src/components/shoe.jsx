import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import {FiHeart} from 'react-icons/Fi';

class Shoe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shoe: {}
    };
    this.shoeClicked = this.shoeClicked.bind(this);
  }

  componentDidMount() {
    this.setState({
      shoe: this.props.shoe
    });
  }

  shoeClicked() {
    axios.put(`/api/product/${this.props.shoe['SKU']}`)
      .then((result) => {
        this.props.shoeClicked(result.data);
      })
      .catch((err) => {
        console.error('Error updating views', err);
      });
  }

  render () {
    return (
      <div class="column-4">
        <div class="shoe-4" onClick={this.shoeClicked}>
          <div class="shoe-img-container-4">
            <span class="heart-icon-4"> <FiHeart /></span>
            <img src={this.props.shoe.currentShoePictures[0]}/>
          </div>
          <a class="shoe-link-4">
            <span class="product-name-4">
              <span class="shoe-name-4">{this.props.shoe.shoeName}</span>
              <span class="shoe-gender-4">{this.props.shoe.gender}</span>
            </span>
            <div class="price-4">{this.props.shoe.price}</div>
          </a>
        </div>
      </div>
    );
  }

}



export default Shoe;