
function objectCreation() {
  var tArray = [];

  for (var i = 100; i > 0; i--) {
    tArray[i] = new MyClass(
      i,
      Math.sqrt(i), 
      i + 1,
      i - 1,
      '' + i
    );
  }

  tArray[50].f = i * i;

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

function MyClass(pA, pB, pC, pD, pE) {
  this.a = pA;
  this.b = pB;
  this.c = pC;
  this.d = pD;
  this.e = pE;
}
