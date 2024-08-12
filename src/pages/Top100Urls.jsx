import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";

const Top100Urls = () => {
  const { top100LinkList } = useContext(PageContext);

  return (
    <div>
      <h1>Top 100 Urls</h1>
      <p>Welcome to the top 100 urls Page!</p>
    </div>
  );
};

export default Top100Urls;
