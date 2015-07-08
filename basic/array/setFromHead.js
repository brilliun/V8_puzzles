function measure(pSize) {
  var tResult;

  for (var n = 0; n < pSize; n++) {
    tResult = 0;

    for (var k = 0; k < 100; k++) {
      tResult += mData[k];
    }

    mResults[n] = tResult;
  }
}

var mResults = [];
var N = 10000;
var mData = new Array();

for (var i = 0; i < 100; i++) {
  mData[i] = i;
}

var mStart = Date.now();
measure(10000000);
var mEnd = Date.now();
print(mEnd - mStart);
