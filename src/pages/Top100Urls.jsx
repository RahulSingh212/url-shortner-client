import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/PageContext";
import { fetchLinksListHandler } from "../lib/helper";
import TabInfoSection from "../components/sections/TabInfoSection";
import { TOP_100_LINKS_LIST } from "../lib/helper";

const Top100Urls = () => {
  const { top100LinkList, setTop100LinkList } = useContext(PageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      setSuccess(true);
      setError(true);
      const res = await fetchLinksListHandler();
      setResponseMsg(res.message);

      if (res.status) {
        setTop100LinkList(res.urls);
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
        {top100LinkList.length > 0 && (
          <div className={`relative w-full flex flex-col space-y-2`}>
            {top100LinkList.map((urlInfo, index) => (
              <TabInfoSection
                key={index}
                listIdx={index}
                dbId={urlInfo.id}
                listType={TOP_100_LINKS_LIST}
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

export default Top100Urls;

// Full url, id, title, click_count, created at,
