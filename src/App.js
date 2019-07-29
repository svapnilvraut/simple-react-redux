import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./store";
import { Provider } from "react-redux"
import Counter from "./components/Counter";


const store = configureStore({counter: 0})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Counter/>
    </div>
    </Provider>
  );
}

export default App;
