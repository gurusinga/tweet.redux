import { GET_DATA, ADD_DATA, REMOVE_DATA } from '../constants/actionTypes';
// import Action Type which are strings.

// ECMAScript syntax default parameter that can defined a default value.
// The value is set to an empty array.
const reducers = (state = [], actions) => {
  // Since actions has 2 values, type and payload, based on type in switch statement,
  // it will be pass through here.
  switch (actions.type) {
    case GET_DATA:
      // ECMAScript Object.freeze() that prevents data mutation or data change.
      Object.freeze(state);
      // If there is an actions with payload sent through the switch statement,
      // it will return the payload, if there is no payload sent, it will return,
      // default paramenter which is an empty array
      return actions.payload || state;
    case ADD_DATA:
      // ECMAScript Object.freeze() that prevents data mutation or data change.
      Object.freeze(state);
      // Spread operator of an array which returns copy of an array and the payload.
      return [...state, actions.payload];
    case REMOVE_DATA:
      // ECMAScript Object.freeze() that prevents data mutation or data change.
      Object.freeze(state);
      // filter will also return a new array.
      return state.filter((items) => items.id !== actions.payload.id);
    default:
      // if there is no action defined and passed through
      return state;
  }
};

export default reducers;
