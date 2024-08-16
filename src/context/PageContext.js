import React, { createContext, useState } from 'react';

// This context is used to store the details of url across multiple sections for the client.
// 1. Stores the list of top 100 urls based upon the click count
// 2. Stores the list of all the urls in the database
// 3. Stores the list of all the urls based upon the search of the user
// 4. Has the state functionality to close and open the sidebar in responsive ui

const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [top100LinkList, setTop100LinkList] = useState([]);
  const [allLinkList, setAllLinkList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [sideBar, setSideBar] = useState(false);

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
