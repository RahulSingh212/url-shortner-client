import axios from "axios";

const BASE_URL = "http://localhost:3000";

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
      let message = data.reduce((msg, val, idx) => msg += `${val} `);

      return {
        status: false,
        message: message,
        shortCode: "",
        shortUrl: "",
        error: error,
      };
    }
    else {
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

export const fetchTop100LinksHandler = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
  } catch (error) {

  }
};
