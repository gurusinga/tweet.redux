import { GET_DATA, ADD_DATA, REMOVE_DATA } from '../constants/actionTypes';

describe('Tweet Redux', () => {
  describe('Action Types', () => {

    it('has value of string `GET_DATA`', () => {
      expect(GET_DATA).toEqual('GET_DATA');
    });
    it('has value of string `ADD_DATA`', () => {
      expect(ADD_DATA).toEqual('ADD_DATA');
    });
    it('has value of string `REMOVE_DATA`', () => {
      expect(REMOVE_DATA).toEqual('REMOVE_DATA');
    });
  });
});
