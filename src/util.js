function getDataToDisplay(array, index) {
  const toDisplay = [];
  let i = index;
  let k = array.length < 4 ? array.length : 4;
  while (toDisplay.length < k) {
    toDisplay.push(array[i]);
    i += 1;
    if (i > array.length - 1) {
      i = 0;
    }
  }
  return toDisplay;
};

export { getDataToDisplay };
