class Stores {
  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
    this.listeners = [];
  }

  // getState methods returns the latest state to subscribed component
  getState() {
    return [...this.state].reverse();
  }

  // Dispatch sends an actions
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener());
  }

  // Subscribe method for component that wants to get state from Store
  subscribe(listener) {
    this.listeners = [...this.listeners, listener];

    // return an unsubscribe function
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}

export default Stores;
