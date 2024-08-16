const BASE62_CHARACTERS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Base-62 Encoding: Representation of data using a base-62 encoding system, which has a set of
// 62 characters to encode data resulting in a shorter, readable identifiers.

// This 'idEncryptor' method takes a takes a numberic ID as input and converts it into a base-62 encoding

// Treats the id a string and divided each value by 62 repeatedly inside a while loop and adds
// the character corresponding to the modulo value from the BASE62_CHARACTERS to the output string

// Continues till id becomes 0, and return genererated value unless entered id not '0'
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


// This 'idDecryptor' method takes base-62 encoded string to it's original numeric ID

// For the entered id, iterates over each character of the id, then finds the corresponding position
// in the BASE62_CHARACTERS string and updates the corresponding id
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


