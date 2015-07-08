function array_store() {
  var N = 65000;
  var tArray = new Array();

  for (var i = 0; i < N; i++) {
    tArray[i] = i;
  }

  return tArray;
}

function measure(pSize) {
  var tResult;

  for (var n = 0; n < pSize; n++) {
    tResult = array_store();
    mResults.push(tResult.length);
  }
}

var mResults = [];

var mStart = Date.now();
measure(1000);
var mEnd = Date.now();
print(mEnd - mStart);
