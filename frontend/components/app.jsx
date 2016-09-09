import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="splash">
    <h1>Welcome to Finstagram</h1>
    <p>Finstagram is a social media application written as a end-of-class project. I spent two weeks writing the code behind this project, for 40 hours a week in an office. This program is written as a hybrid of Instagram and AirBnB, with the functionality of images, users, follows, comments, and likes of Instagram, with the map and map marker functionality of AirBnB. I wrote this application entirely by myself, without any external resources, including the styling. I hope you nejoy my project. To get started click the button below.</p>
    <a className="github-link" target="_blank" href="https://github.com/jackftilly/finstagram"><i className="fa fa-github-square"></i></a>
    <p className="jackftilly">- Jack Fintan Tilly (@jackfintan)</p>
    <Link to={`/login`}>Click here to enter the app!</Link>
  </div>
);
export default App;
