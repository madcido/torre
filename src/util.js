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
}

function trimStr(str, size = 1) {
  let trimmedStr = '';
  if (str.length > size) {
    trimmedStr = str.slice(0, size) + '...';
  } else {
    trimmedStr = str;
  }
  return trimmedStr;
}

export { getDataToDisplay, trimStr };
