import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import CakeHooks from './components/CakeHooks';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <UserContainer/>
      {/*<CakeContainer/>
      <CakeHooks/>
      <IceCreamContainer/>
      <NewCakeContainer/>*/}
    </div>
    </Provider>
  );
}

export default App;
