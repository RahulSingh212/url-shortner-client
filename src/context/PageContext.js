import React, { createContext, useState } from 'react';

// Create a Context
const PageContext = createContext();

// Create a Provider Component
const PageProvider = ({ children }) => {
  const [top100LinkLists, setTop100LinkLists] = useState('light');


  const pageValue = {
    top100LinkLists,
    setTop100LinkLists
  }

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
