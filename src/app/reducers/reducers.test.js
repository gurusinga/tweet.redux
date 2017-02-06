import reducers from './reducers';

describe('Tweet Redux', () => {
  describe('Reducers', () => {
    const initialState = [{
      id: 0, title: 'Development'
    }];

    const mockPayload = { type: 'random', payload: {} };

    it('returns state with an unknown action', () => {
      const result = reducers(initialState, mockPayload);
      expect(result).toBe(initialState);
    });

    it('returns empty array for state by default', () => {
      const result = reducers(undefined, mockPayload);
      expect(result).toEqual([]);
    });

    it('returns correct payload on GET_DATA action', () => {
      const result = reducers(undefined, {
        type: 'GET_DATA',
        payload: initialState
      });
      expect(result).toBe(initialState);
    });

    it('returns state WITH added data on REMOVE_DATA action', () => {
      const newData = { id: 1, title: 'A List Apart' },
            nextState = [ ...initialState, newData ],
            result = reducers(initialState, {
              type: 'ADD_DATA',
              payload: newData
      });
      expect(result).toEqual(nextState);
    });

    it('returns state WITHOUT object on REMOVE_DATA action', () => {
      const removedData = { id: 0, title: 'AngularJS' },
        result = reducers(initialState, {
          type: 'REMOVE_DATA',
          payload: removedData
        });
      expect(result).not.toContain(removedData);
    });
  });
});
