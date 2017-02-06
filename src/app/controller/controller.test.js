import Controller from './controller';
import app from '../app';
import Stores from '../stores/stores';
import reducers from '../reducers/reducers';
import initialData from '../data/data';


describe('Tweet Redux', () => {
  describe('Controller', () => {
    let controller;
    let $controller;
    let store;
    let actions;

    beforeEach(() => {
      window.module(app);
      window.module(($provide) => {
        $provide.value('store', new Stores(reducers, initialData));
        $provide.value('actions', {
          getData: () => {
            return {
              then: () => {}
            };
          },
          addData: () => {
            return {
              then: () => {}
            };
          },
          removeData: () => {
            return {
              then: () => {}
            };
          }
        });
      });
    });

    beforeEach(inject((_store_, _actions_, _$controller_) => {
      store = _store_;
      actions = _actions_;
      $controller = _$controller_;
    }));

    beforeEach(() => {
      spyOn(actions, 'getData').and.callThrough();
      spyOn(actions, 'addData').and.callThrough();
      spyOn(actions, 'removeData').and.callThrough();

      controller = $controller(Controller, {
        actions
      });
    });

    it('should inject a store', () => {
      const newStore = new Stores(reducers, initialData);
      expect(newStore).toEqual(store);
    });

    it('calls getData() service immediately', () => {
      controller.$onInit();
      expect(actions.getData).toHaveBeenCalled();
    });
    it('calls addData() service immediately', () => {
      controller.save();
      expect(actions.addData).toHaveBeenCalled();
    });
    it('calls removeData() service immediately', () => {
      controller.onDelete();
      expect(actions.removeData).toHaveBeenCalled();
    });
  });
});
