export const all = (arr, fn = Boolean) => arr.every(fn);

export const allEqual = (arr) => arr.every((val) => val === arr[0]);

export const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

export const compact = (arr) => arr.filter(Boolean);

export const deepFlatten = (arr) => [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));

export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => !s.has(x));
};

export const elementContains = (parent, child) => parent !== child && parent.contains(child);

export const filterNonUnique = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

export const findKey = (obj, fn) => Object.keys(obj).find((key) => fn(obj[key], key, obj));

export const findLast = (arr, fn) => arr.filter(fn).pop();

export const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

export const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

export const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);

export const getType = (v) => (v === undefined ? "undefined" : v === null ? "null" : v.constructor.name.toLowerCase());

export const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter((x) => s.has(x));
};

// eslint-disable-next-line no-sparse-arrays
export const is = (type, val) => ![, null].includes(val) && val.constructor === type;

export const isLowerCase = (str) => str === str.toLowerCase();

export const isNil = (val) => val === undefined || val === null;

export const isNull = (val) => val === null;

export const isObject = (obj) => obj === Object(obj);

export const isNumber = (val) => typeof val === "number";
