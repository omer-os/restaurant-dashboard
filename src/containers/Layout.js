import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Layout;
