function measure(pSize) {
  var tResult;

  for (var n = 0; n < pSize; n++) {
    tResult = 0.0;

    for (var k = 0; k < mData.length - 1; k++) {
      tResult += mData[k];
    }
    
    mResults[n] = tResult;
  }
}

var mResults = [];
var mData = new Array(1001);

for (var i = 0; i < 1000; i++) {
  mData[i] = i + 0.5;
}
mData[1000] = true;

var mStart = Date.now();
measure(1000000);
var mEnd = Date.now();
print(mEnd - mStart);
