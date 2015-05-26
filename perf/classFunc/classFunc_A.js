var mObject1 = {id: 1};
mObject1.fn = function foo() {};

var mObject2 = {id: 2};
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
