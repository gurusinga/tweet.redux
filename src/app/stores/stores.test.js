import Stores from './stores';
import actions from '../actions/actions'
import reducers from '../reducers/reducers';
import { GET_DATA, ADD_DATA, REMOVE_DATA } from '../constants/actionTypes';

describe('Tweet Redux', () => {
  describe('Stores', () => {
    const initialState = [{
      id: 0,
      postDate: Date.now(),
      title: 'Programming'
    }];

    it('returns initial state', () => {
      const store = new Stores(reducers, initialState);
      const dataInStore = store.getState();
      expect(dataInStore).toEqual(initialState);
    });

    it('stores dispatched action GET_DATA', () => {
      const store = new Stores(reducers, initialState);
      const data = { type: GET_DATA };
      store.dispatch(data);
      expect(store.getState()).toEqual(initialState);
    });

    it('stores dispatched action ADD_DATA', () => {
      const store = new Stores(reducers);
      const data = { type: ADD_DATA, payload: 'payload' };
      store.dispatch(data);
      expect(store.getState()).toEqual([ 'payload' ]);
    });

    it('stores dispatched action ADD_DATA', () => {
      const store = new Stores(reducers, initialState);
      const data = { type: REMOVE_DATA, payload : { id: 0 } };
      store.dispatch(data);
      expect(store.getState()).toEqual([]);
    });
  });
});
