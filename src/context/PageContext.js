import React, { createContext, useState } from 'react';

// Create a Context
const PageContext = createContext();

// Create a Provider Component
const PageProvider = ({ children }) => {
  const [top100LinkList, setTop100LinkList] = useState([]);
  const [allLinkList, setAllLinkList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [sideBar, setSideBar] = useState(false);

  const removeShortUrlHandler = async (dbId, isTopList = true) => {
    
  }

  const pageValue = {
    top100LinkList,
    setTop100LinkList,
    allLinkList,
    setAllLinkList,
    searchList,
    setSearchList,
    sideBar,
    setSideBar,
    removeShortUrlHandler,
  }

  return (
    <PageContext.Provider value={pageValue}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
