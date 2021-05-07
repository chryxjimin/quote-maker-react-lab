import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component 
                and pass down callback props for removing, 
                upvoting and downvoting quotes
                needs to be connected to the Redux state 
                so that it can render the quotes
                Also make sure to attach the remove, upvote, and 
                downvote actions from the Quotes Actions file 
                to pass down as callback props to the QuoteCard component.
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect()(Quotes);
