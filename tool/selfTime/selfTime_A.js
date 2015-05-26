function MyClass(pA, pB, pC, pD, pE) {
  this.a = pA;
  this.b = pB;
  this.c = pC;
  this.d = pD;
  this.e = pE;
}

function SubClass(pM, pN) {
  this.bool = pM % 2;
  this.str = '{' + pN + '}';
}


function childFunc() {
  var tArray = [];

  for (var i = 100; i > 0; i--) {
    tArray[i] = new MyClass(
      "[" + i + ":" + (i / 3) + "]", 
      Math.pow(i, 2), 
      (i * 97 - (i % 2) / 37),
      Math.max(i, 40, i + 30),
      new SubClass(i, i / 2)
    );
  }

  return tArray;
}

var mResult = [];

function measure(pPos) {
  mResult[pPos] = childFunc();
}

function startTest(pLength) {
  for (var n = 0; n < pLength; n++) {
    measure();
  }
  
}

//startTest(100000);
