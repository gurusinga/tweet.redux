import controller from '../controller/controller';
import templateView from './view.html';
import View from './view';
import app from '../app';

describe('Tweet Redux', () => {

  beforeEach(() => {
    window.module(app);
  });

  describe('View', () => {
    const ViewMock = new View();

    it('contains `list-group--tweet` element', () => {
      expect(templateView).toContain('list-group--tweet');
    });

    it('uses the right template',() => {
      expect(ViewMock.template).toEqual(templateView);
    });

    it('uses the correct controller alias', () => {
      expect(ViewMock.controllerAs).toBe('viewer');
    });

    it('calls the right controller', () => {
      expect(ViewMock.controller).toEqual(controller.name.toLowerCase());
    });
  });
});
