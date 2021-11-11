//LAM VIEC VOI ARRAY PHAN 2
//Su dung cac phuong thuc co doi so la 1 ham

var courses = [
    {
        id: 1,
        name: 'JS' ,
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML/CSS',
        coin: 0,
    },
    {
        id:3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500,
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 100,
    },
];

//forEach() : duyet qua tung phan tu cua mang
courses.forEach(function (course, index) {
    console.log(index, course)
});

//every(): kiem tra tat ca phan tu cua 1 mang thoa man dieu kien nao do

var isFree = courses.every(function (course, index) {
    return course.coin === 0;
});

console.log (isFree);

//some() : kiem tra cac phan tu trong mang, chi can 1 phan tu dung tra ve true

var isFree = courses.some(function (course, index) {
    return course.coin === 0;
});
console.log (isFree);

//find() : tim kiem phan tu trong mang co phuong thuc/thuoc tinh nao do khong. chi tra ve 1 phan tu dau tien thoa man

var course = courses.find(function (course, index) {
    return course.name === 'Ruby';
});

console.log(course)

//filter(): tim kiem va tra ve tat ca phan tu thoa man dieu kien

var course = courses.filter(function (course, index) {
    return course.name === 'Ruby';
});

console.log(course)

var monsters = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    },
    // ...
]
  
   
var monsterX = monsters.find(function (monster) {
    if (monster.attack == 150) {
        return monster
    }
}); 
if (monsterX === undefined) {
        console.log(null) 
    } 
else {
        console.log(monsterX)
    }

console.log ('-------------------------------------------------')

//Map(): lap qua cac e trong array, tra ve 1 array, co the them, sua , xoa cac key-value trong array cu

function courseHandler (course, index, originArray) {
    // console.log(course)
    // return course;
    // return 123;
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray,
    }
};
 var newCourses = courses.map(courseHandler);

console.log (newCourses)

//Reduce() : dung khi muon nhan ve mot gia tri duy nhat, sau khi tinh toan tren cac phan tu cua Array
//Bai toan: tinh tong so coin cua cac course

//Cach 1: Dung vong lap for/of
var totalCoin = 0;
for (var course of courses) {
    totalCoin += course.coin
}
console.log (totalCoin)

//Cach 2: Dung reduce()
var i = 0;
function coinHandler (accumulator, curentValue, curentIndex, originArray) {
    i++;

    var total = accumulator + curentValue.coin
    console.table ({
        'Luot chay :': i,
        'Bien luu tru :':accumulator,//Hàm return lại giá trị bn thì Biến lưu trữ nhận giá trị đó ở lượt sau  
        'GIa khoa hoc :': curentValue.coin,//value của key "coin" tại phần tử đang lặp tới
        'Tich luy duoc :': total, 
    })
    return total
};
 var totalCoin = courses.reduce(coinHandler, 0);    
console.log (totalCoin)