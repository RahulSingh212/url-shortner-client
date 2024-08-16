import axios from "axios";
import { idEncryptor } from "./handler";

export const BASE_URL = "http://localhost:3000";

export const TOP_100_LINKS_LIST = "TOP-100-LINKS-LIST";
export const ALL_LINKS_LIST = "ALL-LINKS-LIST";
export const SEARCH_LINKS_LIST = "SEARCH-LINKS-LIST";


export const createNewShortUrlHandler = async (full_url) => {
  try {
    const res = await axios.post(`${BASE_URL}/short_urls`, {
      full_url,
    });

    if (res.status >= 0 && res.status < 300) {
      const data = res.data;

      return {
        status: true,
        message: "Successfully created new short url.",
        shortCode: data.short_code,
        shortUrl: `${BASE_URL}/${data.short_code}`,
        error: null,
      };
    } else {
      return {
        status: false,
        message: "Unable to create short url.",
        shortCode: "",
        shortUrl: "",
        error: null,
      };
    }
  } catch (error) {
    if (error.response) {
      const data = error.response.data.errors;
      let message = data.reduce((msg, val, idx) => (msg += `${val} `));

      return {
        status: false,
        message: message,
        shortCode: "",
        shortUrl: "",
        error: error,
      };
    } else {
      return {
        status: false,
        message: "Unable to create short url.",
        shortCode: "",
        shortUrl: "",
        error: error,
      };
    }
  }
};

export const fetchLinksListHandler = async (fetchAllLinks = false) => {
  let reqUrl = "";
  if (fetchAllLinks) {
    reqUrl = `${BASE_URL}/short_urls/all_urls`;
  } else {
    reqUrl = `${BASE_URL}`;
  }

  try {
    const res = await axios.get(reqUrl);

    if (res.status >= 0 && res.status < 300) {
      const data = res.data;

      if (data.urls) {
        return {
          status: true,
          message: "Successfully fetched top 100 links.",
          urls: JSON.parse(data.urls),
          error: null,
        };
      } else {
        return {
          status: false,
          message: "Successfully fetched top 100 links.",
          urls: res.data,
          error: null,
        };
      }
    } else {
      return {
        status: false,
        message: "Unable to fetch top 100 links list.",
        urls: res.data,
        error: null,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Unable to fetch top 100 links list.",
      urls: [],
      error: error,
    };
  }
};

export const fetchSearchedUrlLists = async (url_name) => {
  let reqUrl = `${BASE_URL}/short_urls/search_urls?name=${url_name}`;

  try {
    const res = await axios.get(reqUrl);

    if (res.status >= 0 && res.status < 300) {
      const data = res.data;

      if (data.urls) {
        return {
          status: true,
          message: "Successfully fetched searched urls.",
          urls: data.urls,
          error: null,
        };
      } else {
        return {
          status: false,
          message: "Successfully fetched searched urls.",
          urls: res.data,
          error: null,
        };
      }
    } else {
      return {
        status: false,
        message: "Unable to fetch urls.",
        urls: res.data,
        error: null,
      };
    }
  } catch (error) {
    return {
      status: false,
      message: "Unable to fetch urls.",
      urls: [],
      error: error,
    };
  }
};

export const removeRecordHandler = async (dbId) => {
  const eId = idEncryptor(dbId);
  let reqUrl = `${BASE_URL}/short_urls/${eId}`;
  
  try {
    const res = await axios.delete(reqUrl);

    if (res.status >= 200 && res.status < 300) {
      return {
        status: true,
        message: "Successfully deleted the record from the db.",
        error: null,
      };
    }
    else {
      return {
        status: false,
        message: "Unable to delete the record.",
        error: null,
      };
    }
  }
  catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Unable to delete the record.",
      error: error,
    };
  }

}