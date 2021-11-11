// TOÁN TỬ SỐ HỌC
var a = 15;
var b = 209;
var c = a + b;
var d = b - a;
var e = a * b;
var f = a ** b;
var g = b / a;
var h = b % a;

console.log('c =',c);
console.log('d =',d);
console.log('e =',e);
console.log('f =',f);
console.log('g =',g);
console.log('h =',h);
console.log(a++);
console.log(a--);
// Việc 1: +/- 1 cho a, a = a +/- 1. Giá trị của a được +/- 1
// Việc 2: Trả về a' = a trước khi được +/- 1 
console.log(++a);
console.log(--a);
// Việc 1: +/- 1 cho a, a = a +/- 1. Giá trị của a được +/- 1
// Việc 2: Trả về a sau khi đã được +/- 1 

var m = 6;
var n  = m++ + ++m;
// = 6 + 8 
console.log (n)

// TOÁN TỬ GÁN

var z = 44;
//Gán 1 cho a

z += 1;
z -= 2;
z *= 3;
z /= 4;
z **= 5;

// TOÁN TỬ CHUỖI

var firstName = 'hung';
var lastName = 'nguyen';
console.log (firstName + ' ' + lastName)

var naMe = "AI";
naMe += ' pro';
console.log (naMe);

//TOÁN TỬ SO SÁNH

var k = 1;
var h = 2;
// có thể gán chuỗi
if (k == h) {
    console.log('Right')
}
else {
    console.log ('Wrong')
}

if (k != h) {
    console.log('Right')
}
else {
    console.log ('Wrong')
}

if (k >= h) {
    console.log('Right')
}
else {
    console.log ('Wrong')
};

if (k <= h) {
    console.log('Right')
}
else {
    console.log ('Wrong')
};

if (k > h) {
    console.log('Right')
}
else {
    console.log ('Wrong')
};

if (k < h) {
    console.log('Right')
}
else {
    console.log ('Wrong')
};

var k1 = 1;
var k2 = '1';
console.log (k1 == k2);
console.log (k1 === k2);
console.log (k1 != k2);
console.log (k1 !== k2);


//TOÁN TỬ LOGICAL

var num1 = 1;
var num2 = 2;
var num3 = 3;

if (num1 > 0 && num2 > 0 && num3 > 0) {
    console.log ('Đúng!')
}

if (num1 > 0 || num2 < 0 || num3 > 0) {
    console.log ('Đúng!')
}

if (num1 > 0 && num2 > 0 || num3 < 0) {
    console.log ('Đúng!')
}

if (num1 < 0 && num2 < 0 || num3 > 0) {
    console.log ('Đúng!')
}

if (!(12 < 0)) {
    console.log ('ĐÚng')
}






