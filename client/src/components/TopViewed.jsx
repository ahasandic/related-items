import React from 'react';
import ReactDom from 'react-dom';
import Shoe from './shoe.jsx';
import axios from 'axios';
import { FiHeart } from 'react-icons/Fi';

class TopViewed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      topShoes: []
    };
    this.getTopShoes = this.getTopShoes.bind(this);
  }

  componentDidMount() {
    this.getTopShoes();
  }

  getTopShoes() {
    axios.get('/product')
      .then((results) => {
        var shoesArray = results.data.slice(0);
        shoesArray.sort((a, b) => (a.views < b.views) ? 1 : -1);
        this.setState({
          topShoes: shoesArray,
          shoes: results.data
        });
        console.log('sorted shoes array', shoesArray);
      })
      .catch((err) => {
        console.error('Error getting shoes', err);
      });

  }
  render() {
    return (
      <div class="shoes-row">
        {this.state.topShoes.map((shoe, index) => {
          if (index <= 4) {
            return (
              <Shoe shoe={shoe}/>
            );
          }
        })}
      </div>
    );
  }
}


export default TopViewed;