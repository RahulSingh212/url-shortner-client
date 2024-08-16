import React, { useContext, useState, useEffect } from "react";
import { PageContext } from "../context/PageContext";
import { fetchLinksListHandler } from "../lib/helper";
import TabInfoSection from "../components/sections/TabInfoSection";
import { ALL_LINKS_LIST } from "../lib/helper";

const AllUrls = () => {
  const { allLinkList, setAllLinkList } = useContext(PageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      setSuccess(true);
      setError(true);
      const res = await fetchLinksListHandler(true);
      setResponseMsg(res.message);

      if (res.status) {
        setAllLinkList(res.urls);
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
        setSuccess(false);
      }
      setIsLoading(false);
    };

    fetchList();
  }, []);



  return (
    <div className={`pageContainerDiv`}>
      <h1 className={`pageH1Head`}>Top 100 Urls</h1>
      <div className={`pageMainDiv`}>
        {isLoading && (
          <div className={`relative flex w-full px-3 py-2 rounded-md mb-3`}>
            <img
              src="/gif/loading.gif"
              alt="icon"
              className={`rounded-md mx-auto  h-7 w-7  bg-orange-400 fill-[white] `}
            />
            <span className="relative w-full text-center font-semibold text-sm text-black">
              {`Fetching records...`}
            </span>
          </div>
        )}
        {allLinkList.length > 0 && (
          <div className={`relative w-full flex flex-col space-y-2`}>
            {allLinkList.map((urlInfo, index) => (
              <TabInfoSection
                key={index}
                listIdx={index}
                dbId={urlInfo.id}
                listType={ALL_LINKS_LIST}
                fullUrlValue={urlInfo.full_url}
                pageTitle={urlInfo.title}
                clickCount={urlInfo.click_count}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUrls;
