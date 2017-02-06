import { GET_DATA, ADD_DATA, REMOVE_DATA } from '../constants/actionTypes';

// Initialize a javascript object, using Object.assign({} data) means it will return a copy of an object.
const initData = (inputData) => {
  return Object.assign({}, {
    id: new Date().getUTCMilliseconds(),
    postDate: Date.now(),
    title: inputData
  });
};

// Actions method that has local method getDat(), addData() and removeData()
// Each methods will return type of action and the payload that is passed as argument.
const actions = () => {
  const getData = (payload) => {
    return {
      type: GET_DATA,
      payload
    };
  };

  const addData = (payload) => {
    return {
      type: ADD_DATA,
      payload: initData(payload)
    };
  };

  const removeData = (payload) => {
    return {
      type: REMOVE_DATA,
      payload
    };
  };

// Since local methods can be accessed, it's need to be exposed by returning the method.
  return {
    getData,
    addData,
    removeData
  };
};

// Export the actions methods
export default actions;
