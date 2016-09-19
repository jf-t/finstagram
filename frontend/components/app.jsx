import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="splash">
    <h1>Welcome to Finstagram</h1>
    <p>Finstagram is a social media app inspired by Instagram and AirBnB. It takes image uploading and sharing to a whole new level! With a map! Every image has a location and every image from anybody a specific user follows is displayed on a large map. Feel free to follow your friends and favorite celebrities (including me)!</p>
    <a className="github-link" target="_blank" href="https://github.com/jackftilly/finstagram"><i className="fa fa-github-square"></i></a>
    <p className="jackftilly">- Jack Fintan Tilly (@jackfintan)</p>
    <Link to={`/login`}>Click here to enter the app!</Link>
  </div>
);
export default App;
