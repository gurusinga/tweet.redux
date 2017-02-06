class Controller {
  constructor(store, actions) {
    'ngInject';

    // Local reference for injectable Store and actions.
    this.store = store;
    this.actions = actions;
  }
  // Angular 1.5 specific life cycle hooks.
  // The method $onInit will be called after controller on each element constructed and the binding is ready.
  $onInit() {
    this.initView();
  }

  // InitViw which is called by $onInit method invokes subscribe method from store.
  // The data binding this.data get an asignment from store state.
  initView() {
    this.store.subscribe(() => {
      this.data = this.store.getState();
    });
  // For a new input, store will be invoking dispatch getData.
  // The actions return state
    this.store.dispatch(
      this.actions.getData()
    );
  }

  // onPost method that accepts input data. If there's input data,
  // it will then call save method and pass the data then later,
  // it will empty the text input.
  onPost(inputData) {
    if (inputData) {
      this.save(inputData);
      this.inputModel = null;
    }
  }

  // onDelete method that accepts input data.
  // it will then call delete method and pass the data to be deleted.
  onDelete(data) {
    this.delete(data);
  }

  // save method which is called by onPost method.
  // save method invokes dispatch and addData.
  save(inputData) {
    this.store.dispatch(
      this.actions.addData(inputData)
    );
  }

  // delete method which is called by onDelete method.
  // delete method invokes dispatch and removeData.
  delete(data) {
    this.store.dispatch(
      this.actions.removeData(data)
    );
  }
}

export default Controller;
