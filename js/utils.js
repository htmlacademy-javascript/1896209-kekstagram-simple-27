function getRandomIntInclusive (min,max) {
  if (min >= 0 && min < max) { //Если ноль не включать, то description: undefined, comments: NaN.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

function testCommentLength (string, length) {
  return string.length <= length;
}

export { getRandomIntInclusive, testCommentLength};
