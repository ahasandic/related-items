import React from 'react';
import axios from 'axios';
import Shoe from './shoe.jsx';
import RelatedItems from './RelatedItems.jsx';
import TopViewed from './TopViewed.jsx';
import RecentlyViewed from './RecentlyViewed.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayShoe: '',
      shoes: []
    };
    this.getShoes = this.getShoes.bind(this);
  }

  componentDidMount() {
    this.getShoes();
  }
  getShoes() {
    axios.get('/product')
      .then((results) => {
        console.log('succesful axios get');
        this.setState({
          shoes: results.data
        });
        console.log('shoes', this.state.shoes);
      })
      .catch((err) => {
        console.error('error', err);
      });
  }
  getRelatedShoes() {

  }
  render() {
    return (
      <div id="main-component">
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Related Items</h2>
          </div>
          <RelatedItems shoes={this.state.shoes} />
        </div>
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Top Viewed</h2>
          </div>
          <TopViewed shoes={this.state.shoes} />
        </div>
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Recently Viewed</h2>
          </div>
          <RecentlyViewed shoes={this.state.shoes} />
        </div>
      </div>
    );
  }
}

export default App;