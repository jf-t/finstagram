import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { userfromId } from './util/user_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  window.store = store;
  if (current_user) {
    let userOut;
    userfromId(current_user, (user) => {
      store = configureStore({user: { user}});
      ReactDOM.render(<Root store={store} />, root)
    })
  } else {
    store = configureStore();
    ReactDOM.render(<Root store={store} />, root)
  }

});
