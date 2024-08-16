import axios from "axios";
import { idEncryptor } from "./handler";

export const BASE_URL = "http://localhost:3000";

export const TOP_100_LINKS_LIST = "TOP-100-LINKS-LIST";
export const ALL_LINKS_LIST = "ALL-LINKS-LIST";
export const SEARCH_LINKS_LIST = "SEARCH-LINKS-LIST";

// This method takes the full_url as an input parameter, then sends a post request on the url:
// http://localhost:3000/short_url with key full_url and waits for the response from the server.

// If the url does not exist, then it creates a short url for the entered full url, else if already
// exists, then it just sends the response that the full_url already exists in the db.
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

// This method is able to send two different request to two different end points based upon the parameter
// which is fetchAllLinkns.
// 1. If fetchAllLinks is set 'true', this method sends a get request on the url: http://localhost:3000/short_url/all_urls
// and fetches the details of all the urls present in the database.
// 2. If fetchAllLinks is set 'false', this method sends a get request on the url: http://localhost:3000/
// and fetches the details of the top 100 urls based upon the 'click_count' in descreasing order
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

// This method sends a get request on the url: http://localhost:3000/short_url/search_urls with an
// query params name containing the name of the url needs to be search in the database.
// If the name of the url matches the name of the full_url present in the database, it sends a list of
// all the matching full_urls info containing the name in the url.
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

// This method sends a delete request on the url: http://localhost:3000/short_url/ with an the short id 
// of the url present in the databse.
// The entered database-Id of is converted to base-62 encdoing and then removed the record from the database
// matching the entered database Id.
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
    } else {
      return {
        status: false,
        message: "Unable to delete the record.",
        error: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Unable to delete the record.",
      error: error,
    };
  }
};
