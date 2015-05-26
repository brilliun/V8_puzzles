function MyClass (pId, pFunc) {
  this.id = pId;
  this.fn = pFunc;
}

function foo() {};
function bar() {};

var mObject1 = new MyClass(1, foo);
var mObject2 = new MyClass(2, bar);



function measure(pSize) {
  for (var n = 0; n < pSize; n++) {
    mObject1.fn();
  }
}


var mStart = Date.now();
measure(100000000);
var mEnd = Date.now();
print(mEnd - mStart);
