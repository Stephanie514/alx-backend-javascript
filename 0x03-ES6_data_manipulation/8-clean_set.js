function cleanSet(set, startString) {
  let result = '';
  if (startString === '') {
    for (const value of set) {
      result += `${value}-`;
    }
  } else {
    for (const value of set) {
      if (value.startsWith(startString)) {
        result += `${value.slice(startString.length)}-`;
      }
    }
  }
  return result.slice(0, -1);
}

export default cleanSet;
