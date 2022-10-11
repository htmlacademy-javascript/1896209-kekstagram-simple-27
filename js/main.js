function getRandomIntInclusive (min,max) {
  if (min > 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

getRandomIntInclusive();

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function testCommentLength (str,maxlength) {
  if (str.length <= maxlength) {
    return true;
  }

  return false;
}

testCommentLength();

//https://flexiple.com/javascript/javascript-length/
//https://learn.javascript.ru/task/truncate

