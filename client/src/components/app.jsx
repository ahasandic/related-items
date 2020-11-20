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
      recentlyViewed: []
    };
    this.getShoes = this.getShoes.bind(this);
    this.addToViewed = this.addToViewed.bind(this);
    this.refreshShoes = this.refreshShoes.bind(this);
  }

  componentWillMount() {
    this.getShoes();
  }

  // Set the recently viewed state
  addToViewed(shoe) {
    // Get top five shoes in the recentlyViewed state
    var displayShoes = this.state.recentlyViewed.slice(0, 5);
    //Checking if target shoe doesn't in the top 5
    if (displayShoes.every((item) => (
      item['SKU'] !== shoe['SKU']
    ))) {
      //Add shoe to beginning of the states' array
      this.setState({
        recentlyViewed: [shoe].concat(this.state.recentlyViewed)
      });

    }
  }
  // Update the shoes state after a click
  refreshShoes(shoes) {
    this.setState({
      shoes: shoes
    });
  }

  // Grab all shoes from the db
  getShoes(callback) {
    axios.get('/product')
      .then((results) => {
        // Pick a random shoe to be the current shoe placeholder
        var randomShoe = results.data[Math.floor(Math.random() * results.data.length)];

        this.setState({
          shoes: results.data,
          currentShoe: randomShoe,
          recentlyViewed: [randomShoe].concat(this.state.recentlyViewed)
        });
        console.log('The current shoe selected is: ', randomShoe);
      })
      .catch((err) => {
        console.error('error', err);
      });
  }

  render() {
    return (
      <div id="main-component">
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Related Items</h2>
          </div>
          <RelatedItems getShoes={this.getShoes} shoes={this.state.shoes} currentShoe={this.state.currentShoe} addShoe={this.addToViewed} refreshShoes={this.refreshShoes}/>
        </div>
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Top Viewed</h2>
          </div>
          <TopViewed shoes={this.state.shoes} currentShoe={this.state.currentShoe} addShoe={this.addToViewed} refreshShoes={this.refreshShoes}/>
        </div>
        <div class="carousel">
          <div class="carousel-heading">
            <h2>Recently Viewed</h2>
          </div>
          <RecentlyViewed shoes={this.state.shoes} currentShoe={this.state.currentShoe} addShoe={this.addToViewed} recent={this.state.recentlyViewed} refreshShoes={this.refreshShoes}/>
        </div>
      </div>
    );
  }
}

export default App;