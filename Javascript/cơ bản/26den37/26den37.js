// LÀM VIỆC VỚI CHUỖI
var myString = '  Học JS lập trình JS tại JS F8';

//1.Lenght

console.log (myString.length)

//2.Find index

console.log (myString.indexOf('JS', 5));
console.log (myString.lastIndexOf('JS'));
console.log (myString.lastIndexOf('ABC'));
console.log (myString.search('JS'));

//3.Cut string

console.log (myString.slice(4, 10));
console.log (myString.slice(4));
console.log (myString.slice(-3, -1));

//4.Replace
console.log (myString.replace('JS', 'Javascript'));
console.log (myString.replace(/JS/g, 'Javascript'));

//5.Convert to upper case
//6.Convert to lower case

console.log (myString.toUpperCase());
console.log (myString.toLowerCase());

//7. Trim
//loại bỏ khoảng cách thừa 2 bên chuỗi
console.log (myString.trim())
//cách kiểm tra xem đã trim chưa
console.log (myString.trim().length)

//8.Split

var languages = 'JS, PHP, Ruby';
console.log (languages.split(', '));
//', ' là điểm chung dùng để cắt bỏ và gộp các phần tử từ chuỗi sang array

//9.Get a character by index

const myString2 = 'Bạn đã trúng tuyển';
console.log (myString2.charAt(4));
console.log (myString2.charAt(1000));
console.log (myString2[1000]);
console.log (myString2[4]);

// Template string

var ten = 'Hung';
var ho = 'Nguyen';
console.log (`Toi la : ${ten} ${ho}`)

console.log ('-----------------------------------------------------');

//LÀM VIỆC VỚI SỐ

var age = 18;
var pi = 3.14456;
var sokohople = 20 / 'aida';
console.log (sokohople);
console.log (isNaN(sokohople));
console.log (isNaN(pi));
console.log (age.toString());
console.log (typeof age.toString());
console.log(pi.toFixed());
console.log(typeof pi.toFixed());
console.log(pi.toFixed(3));

console.log ('-----------------------------------------------------');

//LÀM VIỆC VỚI MẢNG

// var languages1 = 'JS';
// var languages2 = 'PHP';
// var languages3 = 'Ruby';

var languages1 = [
    'JS', 
    'PHP', 
    'Ruby',
    'Dart',
    null,
    undefined,
    function(){},
    {},
    123
];
console.log (languages1);
console.log (typeof languages1);
console.log (typeof {});// object
console.log (typeof []);// array
console.log (Array.isArray (languages1));
console.log (Array.isArray ({}));
console.log (Array.isArray ([]));

console.log (languages1.length);
console.log (languages1[2]);

console.log(languages1.toString());

console.log(languages1.join());
console.log(languages1.join(''));
console.log(languages1.join(' - '));

console.log(languages1.pop());//xoá element cuối mảng, trả về phần tử đã xoá
console.log(languages1.pop());
console.log(languages1.pop());
console.log(languages1.pop());


console.log (languages1);

console.log(languages1.push('HEHE', 'HIHI'));// thêm e cuối mảng, trả về số e mới
console.log (languages1);

console.log (languages1.shift()); //xoá e đầu mảng, trả e đã xoá
console.log (languages1);

console.log (languages1.unshift('HAHA'));// thêm e đầu mảng, trả về số e mới
console.log(languages1);

languages1.splice(1, 1);
console.log(languages1);
languages1.splice(1, 2);
console.log(languages1);
languages1.splice(1, 1, 'HOHO');
console.log(languages1);

var languages2 = [
    'KIKI',
    'KAKA',
    'KEKE'
]

console.log(languages1.concat(languages2))

console.log (languages1.slice(1,3));
console.log(languages1);
console.log (languages1.slice(1));
console.log(languages1);

console.log ('-----------------------------------------------------');

function writeLog (message, mes2, mes3) {
    console.log(message);
    console.log(mes2);
    console.log(mes3);
};
writeLog ('alo a đây!', 'cai lanh mua dong')
//message là tham số
//'alo a đây!' là đối số

function vietLong () {
    console.log(arguments)
};
vietLong('Long1', 'Long2');

function vietLog () {
    for (var param of arguments) {
        console.log(param)
    }
};
vietLog ('Log1', 'Log2', 'Log3');

function vietLo () {
    var taoString = '';
    for (var param of arguments) {
        taoString += `${param} - `
    }
    console.log (taoString);
}
vietLo('Lo1', 'Lo2', 'Lo3')

function cong1 (a, b) {
    return a + b;
    console.log('aye');
}
var ketqua1 = cong1 (2, 3);
console.log(ketqua1);


function cong2 (c, d) {
    c + d;
    console.log('aye');
}
var ketqua2 = cong2 (2, 3);
console.log(ketqua2);

function show () {
    console.log('A!')
}

function show () {
    console.log('B!')
}
show()

function show1 () {
    function show2 () {
        console.log('F!')
    };
    show2()
};
show1()
























