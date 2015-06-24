
function objectCreation() {
  var tArray = [];

  for (var i = 100; i > 0; i--) {
    tArray[i] = {
      a: i,
      b: Math.sqrt(i), 
      c: i + 1,
      d: i - 1,
      e: '' + i
    };
  }

  return tArray;
}

var mResult = [];

function measure(pSize) {
  for (var n = 0; n < pSize; n++) {
    mResult[n] = objectCreation();
  }
}

var mStart = Date.now();
measure(100000);
var mEnd = Date.now();
print(mEnd - mStart);
