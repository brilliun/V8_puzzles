function MyClass (pId) {
  this.id = pId;

  if (pId % 2 === 0) {
    this.fn = foo;
  } else {
    this.fn = bar;
  }

}

function foo() {};
function bar() {};

var mObject1 = new MyClass(1);
var mObject2 = new MyClass(2);



function measure(pSize) {
  for (var n = 0; n < pSize; n++) {
    mObject1.fn();
  }
}


var mStart = Date.now();
measure(100000000);
var mEnd = Date.now();
print(mEnd - mStart);
