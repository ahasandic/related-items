import React from 'react';
import ReactDom from 'react-dom';
import Shoe from './shoe.jsx';
import axios from 'axios';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      relatedShoes: []
    };
    this.getShoes = this.getShoes.bind(this);
  }

  componentDidMount() {
    //Update the states of the component
    this.getShoes((related, shoes) => {
      this.setState({
        relatedShoes: related,
        shoes: shoes
      });
    });
  }

  getShoes(callback) {
    axios.get('/product')
      .then((results) => {
        // Make a copy of the results
        var sortedShoes = results.data.slice(0);
        // Sort shoes by views
        sortedShoes.sort((a, b) => (a.views < b.views) ? 1 : -1);
        // Filter shoes by name
        var filteredShoes = sortedShoes.filter((item) => (
          this.props.currentShoe.shoeName === item.shoeName
        ));
        // Send the results to call back
        callback(filteredShoes, results.data);

      })
      .catch((err) => {
        console.error('Error getting shoes', err);
      });
  }

  render() {
    return (
      <div class="shoes-row">
        {this.state.relatedShoes.map((shoe, index) => {
          if (index <= 4) {
            return (
              <Shoe shoe={shoe} addShoe={this.props.addShoe} refreshShoes={this.props.refreshShoes}/>
            );
          }
        })}
      </div>
    );
  }
}

export default RelatedItems;