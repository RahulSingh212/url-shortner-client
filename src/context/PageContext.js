import React, { createContext, useState } from 'react';

// Create a Context
const PageContext = createContext();

// Create a Provider Component
const PageProvider = ({ children }) => {
  const [top100LinkList, setTop100LinkList] = useState([]);
  const [allLinkList, setAllLinkList] = useState([]);


  const pageValue = {
    top100LinkList,
    setTop100LinkList,
    allLinkList,
    setAllLinkList
  }

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
