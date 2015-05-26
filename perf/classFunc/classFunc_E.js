function MyClassA (pId) {
  this.id = pId;
}

function MyClassB (pId) {
  this.id = pId;
}

var mObject1 = new MyClassA(1);
mObject1.fn = function foo() {};

var mObject2 = new MyClassB(2);
mObject2.fn = function bar() {};



function measure(pSize) {
  for (var n = 0; n < pSize; n++) {
    mObject1.fn();
  }
}


var mStart = Date.now();
measure(100000000);
var mEnd = Date.now();
print(mEnd - mStart);
