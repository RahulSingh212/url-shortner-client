import React, { useContext } from "react";
import { PageContext } from "../context/PageContext";

const AllUrls = () => {
  const { allLinkList } = useContext(PageContext);

  return (
    <div>
      <h1>All Available Urls Page</h1>
      <p>Welcome to the All available urls Page!</p>
    </div>
  );
};

export default AllUrls;
