import { GET_DATA, ADD_DATA, REMOVE_DATA } from '../constants/actionTypes';
import Actions from './actions';

describe('Tweet Redux', () => {
  describe('Actions', () => {
    const payload = {
      id: new Date().getUTCMilliseconds(),
      postDate: Date.now(),
      title: 'inputData'
    };

    const actions = new Actions();

    it('returns object with type GET_DATA and a payload', () => {
      expect(actions.getData(payload)).toEqual({ type: GET_DATA, payload });
    });
    it('returns object with type ADD_DATA and a payload', () => {
      const mockPayload = { id: 2323, postDate: 1485643027535, title: undefined};

      spyOn(Date.prototype, 'getUTCMilliseconds').and.callFake(() => 2323);
      spyOn(Date, 'now').and.callFake(() => 1485643027535);

      expect(actions.addData()).toEqual({ type: ADD_DATA, payload: mockPayload });
    });
    it('returns object with type REMOVE_DATA and a payload', () => {
      expect(actions.removeData(payload)).toEqual({ type: REMOVE_DATA, payload });
    });
  });
});
