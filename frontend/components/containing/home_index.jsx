import React from 'react';
import SiteHeaderContainer from './site_header_container.js';
const HomeIndex = ({ children }) => (
  <div>
    <SiteHeaderContainer />
    {children}
  </div>
);

export default HomeIndex;
