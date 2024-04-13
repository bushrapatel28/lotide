const middle = function(arr) {
  const size = arr.length;
  let mid = Math.floor(size / 2);
  const result = [];

  if (size <= 2) {
    return result;
  } else {
    if ((size % 2) === 0) {
      result.push(arr[mid - 1]);
      result.push(arr[mid]);
    } else {
      result.push(arr[mid]);
    }
  }

  return result;
};

module.exports = middle;