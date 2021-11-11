// FOR LOOP

// for (var i = 1; i <=1000; i++) {
//     console.log (i)
// }

//viet cach khac

// var i = 2;
// for (; i <= 100; i++) {
//     console.log(i)
// }

var myArray = [
    'JS', 
    'PHP',
    'Java',
    'Dart',
]
console.log(myArray[1]);
var arrayLength = myArray.length;

for (i = 0; i < arrayLength; i++) {
    // console.log(i);
    console.log(myArray[i]);    
}

console.log('-----------------------------------------------------------');


// FOR/IN LOOP

var myInfo = {
    name: 'Hung Nguyen',
    age: 24,
    address: 'Hanoi, Vietnam',
};

for (var key in myInfo) {
    console.log (key)
    console.log (myInfo[key])
};

var languages = [
    'JS',
    'PHP',
    'Ruby'
];
for (var key in languages) {
    console.log (key)
    console.log (languages[key])
};

var myString = 'Javascript';
for (var key in myString) {
    console.log (key)
    console.log (myString[key])
};

// FOR/OF LOOP
//khong ap dung voi Object, muon dung phai bien doi

var languages2 = [
    'JS',
    'PHP',
    'Ruby'
];
for (var value of languages2) {
    console.log(value)
}

var myString2 = 'Javascript'; 
for (var value of myString2) {
    console.log (value)
}

var myObject = {
    name: 'hung',
    age: 19,
    address: 'HN,VN',
}
console.log(Object.keys(myObject));

for (var value of Object.keys(myObject)) {
    console.log (value)
}

console.log(Object.values(myObject));

for (var value of Object.values(myObject)) {
    console.log (value)
}

console.log('-------------------------------------------------');

//WHILE LOOP

var i = 0;
while (i < 100) {
    i++;
    console.log(i)
}


var myArray1 = [
    'JS',
    'PHP',
    'Ruby'
]

var i = 0;
while (i < myArray1.length) {
    console.log(myArray1[i])
    i++;
}

// DO/WHILE LOOP

//chay xong 1 lan do{} roi moi kiem tra dk while()
var i = 0;
do {
    i++;
    console.log(i)
} while (i < 0)

var i = 0;
do {
    i++;
    console.log(i)
} while (i < 10)

var i = 0;
var isSuccess = false;
do {
    i++;
    console.log('nap the lan' + i);
    //Thanh cong
    // if(true) {
    //     isSuccess = true
    // }

    //That bai
    if (false) {
        isSuccess = true
    }
} while (!isSuccess && i <= 3)//Vong lap chi chay khi khong thanh cong

console.log('------------------------------------------------------')

//BREAK AND CONTINUE IN LOOP
//su dung duoc trong tat ca cac vong lap
//Break de thoat khoi vong lap
//Continue de bo qua mot vai ln lap cua vong lap

for (var i = 0; i < 10; i ++) {
    console.log(i);

    if (i >= 5) {
        break
    }
//neu i >=5 thi dung lap
}

for (var i = 0; i < 10; i ++) {
    if (i % 2 !== 0) {
        continue;
    }
//ko lap qua so le   
    console.log(i);
}

console.log('-------------------------------------------------------------')

//NESTED LOOP (VONG LAP LONG NHAU)

var myArray2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (i = 0; i < myArray2.length; i++) {
    // console.log(myArray2[i]);
    for(var j = 0; j < myArray2[i].length; j++) {
        console.log(myArray2[i][j])
    }
}

for (i = 100; i >= 0; i -= 5) {
    console.log (i)
}






