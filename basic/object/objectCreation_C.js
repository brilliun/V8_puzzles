
function objectCreation() {
  var tArray = [];
  var tObj;

  for (var i = 100; i > 0; i--) {
    tObj = {};
    tObj.a = i;
    tObj.b = Math.sqrt(i);
    tObj.c = i + 1;
    tObj.d = i - 1;
    tObj.e = '' + i;
    tArray[i] = tObj;
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
