const BASE62_CHARACTERS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const idEncryptor = (id) => {
  if (id === null || id < 0 || isNaN(id)) return null;

  id = +id;
  try {
    let base62String = "";
    while (id > 0) {
      base62String = BASE62_CHARACTERS[id % 62] + base62String;
      id = Math.floor(id / 62);
    }

    return base62String || "0";
  } catch (e) {
    console.error(e.message);
    return null;
  }
};

export const idDecryptor = (tinyId) => {
  if (tinyId === null || tinyId.trim() === "") return null;

  try {
    let id = 0;
    for (const char of tinyId) {
      const value = BASE62_CHARACTERS.indexOf(char);
      if (value === -1) return null;

      id = id * 62 + value;
    }

    return id;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};


