import React from 'react';
import axios from 'axios';
import RelatedItems from './RelatedItems.jsx';
import TopViewed from './TopViewed.jsx';
import RecentlyViewed from './RecentlyViewed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      currentShoe: {},
      recentlyViewed: [],
      related: []
    };
    this.getShoes = this.getShoes.bind(this);
    this.getRandomShoe = this.getRandomShoe.bind(this);
    this.getRelatedShoes = this.getRelatedShoes.bind(this);
    this.shoeClicked = this.shoeClicked.bind(this);
    this.getRecent = this.getRecent.bind(this);
  }

  componentDidMount() {
    this.getShoes((shoes) => {
      // pick a random shoe
      var currentShoe = this.getRandomShoe(shoes);
      // Sort all shoes
      shoes.sort((a, b) => (a.views < b.views) ? 1 : -1);
      this.setState({
        shoes: shoes,
        currentShoe: currentShoe,
        related: this.getRelatedShoes(shoes, currentShoe),
        recentlyViewed: [currentShoe].concat(this.state.recentlyViewed)
      });
    });
  }

  // Grab all shoes from the db
  getShoes(callback) {
    axios.get('/api/product')
      .then((results) => {
        callback(results.data);
      })
      .catch((err) => {
        console.error('error', err);
      });
  }

  // Picks a shoe from the db to be the display shoe, not insync with service #1
  getRandomShoe(shoes) {
    var randomShoe = shoes[Math.floor(Math.random() * shoes.length)];
    return randomShoe;
  }

  // Builds the order for the related shoe carousel
  getRelatedShoes(shoes, current) {
    // Filter shoes by name
    var filteredShoes = shoes.filter((item) => (
      current.shoeName === item.shoeName && current['SKU'] !== item['SKU']
    ));
    return filteredShoes;
  }

  // Updates the display shoe and the carousels
  shoeClicked(shoe) {
    this.getShoes((shoes) => {
      // Sort shoes by views
      shoes.sort((a, b) => (a.views < b.views) ? 1 : -1);
      this.setState({
        shoes: shoes,
        recentlyViewed: this.getRecent(shoe),
        currentShoe: shoe,
        related: this.getRelatedShoes(this.state.shoes, shoe)
      });
    });
  }

  // Builds the carousel for most recently viewed shoes
  getRecent(shoe) {
    var filtered = this.state.recentlyViewed.filter((item) => (item['SKU'] !== shoe['SKU']));
    return [shoe].concat(filtered);
  }

  render() {
    return (
      <div id="main-component-4">
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Related Items</h2>
          </div>
          <RelatedItems related={this.state.related} shoeClicked={this.shoeClicked}/>
        </div>
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Top Viewed</h2>
          </div>
          <TopViewed shoes={this.state.shoes} shoeClicked={this.shoeClicked}/>
        </div>
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Recently Viewed</h2>
          </div>
          <RecentlyViewed shoes={this.state.recentlyViewed} shoeClicked={this.shoeClicked}/>
        </div>
      </div>
    );
  }
}

export default App;