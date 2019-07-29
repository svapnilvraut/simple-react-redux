export default function(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER": {
      const _counter = state.counter + 1;
      return { ...state, counter: _counter };
    }
    case "RESET_COUNTER": {
      return { ...state, counter: 0 };
    }
    default: {
      return state;
    }
  }
}
