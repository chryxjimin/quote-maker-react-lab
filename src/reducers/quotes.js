import uuid from 'uuid'

export default (state = [], action) => {
  // console.log(state)
  switch(action.type) {
    // case 'ADD_QUOTE':

    // case 'REMOVE_QUOTE': 

    // case 'UPVOTE_QUOTE':

    // case 'DOWNVOTE_QUOTE':


    default:
      return state;
  }
}


// We will also need to extend out the Quotes Reducer 
// to handle removing
//  quotes, upvoting quotes, and downvoting quotes as well.