function changeType(pList) {
    var tArray;

    for (var n = 0; n < pList.length; n++) {
	tArray = pList[n];
	tArray[n % mArraySize] = 1;
    }
}

function readResults(pResult, pList) {
    var tArray;

    for (var n = 0; n < pList.length; n++) {
	tArray = pList[n];
	pResult[n] = tArray[Math.floor(mArraySize / 2)];
    }
}



var mListSize = 10000;
var mResults = new Array(mListSize);
var mList = new Array(mListSize);
var mArraySize = 1000;
var mData;

for (var j = 0; j < mListSize; j++) {
    mData = new Array(mArraySize);

    for (var i = 0; i < mArraySize; i++) {
	mData[i] = i + 0.5;
    }

    mList[j] = mData;
}

// print('changeType: start');
var mStart = Date.now();
changeType(mList);
var mEnd = Date.now();
// print('changeType: end');
readResults(mResults, mList);
print((mEnd - mStart) + ': ' + mResults[mListSize / 2]);
