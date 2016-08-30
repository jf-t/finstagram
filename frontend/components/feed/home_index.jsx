import React from 'react';
import SiteHeader from './side_header.jsx';
const HomeIndex = ({ children }) => (
  <div>
    <SiteHeaderController />
    {children}
  </div>
);

export default HomeIndex;
