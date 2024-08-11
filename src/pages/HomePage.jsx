import React, { useContext } from 'react';
import { PageContext } from '../context/PageContext';

const HomePage = () => {
  const { top100LinkLists } = useContext(PageContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default HomePage;