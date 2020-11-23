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
      <div class="column">
        <div class="shoe" onClick={this.shoeClicked}>
          <div class="shoe-img-container">
            <span class="heart-icon"> <FiHeart /></span>
            <img src={this.props.shoe.currentShoePictures[0]}/>
          </div>
          <a class="shoe-link">
            <span class="product-name">
              <span class="shoe-name">{this.props.shoe.shoeName}</span>
              <span class="shoe-gender">{this.props.shoe.gender}</span>
            </span>
            <div class="price">{this.props.shoe.price}</div>
          </a>
        </div>
      </div>
    );
  }

}



export default Shoe;