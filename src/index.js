const flatten = (arr, depth = 1) => {
  if (depth === 0) {
    return arr;
  }
  const result = arr.reduce((acc, item) => {
    if (item instanceof Array) {
      return [...acc, ...flatten(item, depth - 1)];
    }
    return [...acc, item];
  }, []);
  return result;
};

export default flatten;

