function pow_sum(pLength) {
  var sum = 0;

  for (var i = 0; i < pLength; i++) {
    sum += Math.pow(i, 2);
  }

  return sum;
}

function measure(pSize) {
  for (var n = 0; n < pSize; n++) {
    pow_sum(100);
  }
}

var mStart = Date.now();
measure(10000000);
var mEnd = Date.now();
print(mEnd - mStart);
