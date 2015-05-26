function MyClass (pId) {
  this.id = pId;
}

var mObject1 = new MyClass(1);
mObject1.fn = function foo() {};

var mObject2 = new MyClass(2);
mObject2.otherFn = function bar() {};



function measure(pSize) {
  for (var n = 0; n < pSize; n++) {
    mObject1.fn();
  }
}


var mStart = Date.now();
measure(100000000);
var mEnd = Date.now();
print(mEnd - mStart);
