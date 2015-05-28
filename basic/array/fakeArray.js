function array_loop(pArray) {
  var sum = 0;

  for (var i = 0; i < pArray.length; i++) {
    sum += pArray[i];
  }

  return sum;
}

function measure(pSize, pArray) {
  for (var n = 0; n < pSize; n++) {
      array_loop(pArray);
  }
}

var mArray = {length: 1000};

for (var i = 0; i < 1000; i++) {
  mArray[i] = i;
}

var mStart = Date.now();
measure(1000000, mArray);
var mEnd = Date.now();
print(mEnd - mStart);
