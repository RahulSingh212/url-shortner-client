import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../context/PageContext";
import { fetchLinksListHandler } from "../lib/helper";
import TabInfoSection from "../components/sections/TabInfoSection";

const Top100Urls = () => {
  const { top100LinkList, setTop100LinkList } = useContext(PageContext);
  const [isLoading, setIsLoading] = useState(false);
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
      <div className={`pageMainDiv mt-4`}>
        <span className="relative w-full px-3 py-2 rounded-md mb-3 text-center font-semibold text-lg">
          {responseMsg}
        </span>
        {Array.isArray(top100LinkList) && top100LinkList.length > 0 && (
          <div className={`relative w-full flex flex-col space-y-1`}>
            {top100LinkList.map((urlInfo, index) => (
              <TabInfoSection
                key={index}
                dbId={urlInfo.id}
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
