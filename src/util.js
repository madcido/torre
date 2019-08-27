function getDataToDisplay(array, index) {
  const toDisplay = [];
  let i = index;
  while (toDisplay.length < 4) {
    toDisplay.push(array[i]);
    i += 1;
    if (i > array.length - 1) {
      i = 0;
    }
  }
  return toDisplay;
};

export { getDataToDisplay };
