//LỆNH RẼ NHÁNH IF ELSE
//Dùng khi cacnf so sánh tính đúng sai

//if else khác if ở chỗ, nếu if else gặp điều kiện đúng, nó sẽ ngay lập tức thực hiện code ở nhánh đúng đầu tiên,
//và không kiểm tra đk khác.
//với if, nó sẽ kiểm tra tất cả các điều kiện để thực thi code 

var date = 2;
if (date === 2) {
    console.log('Monday')
} else if (date > 0) {
    console.log('Tuesday')
} else if (date === 4) {
    console.log('Wednesday')
} else {
    console.log('Chịu')
}

//LỆNH RẼ NHÁNH SWITCH
//Dùng khi biết trước giá trị cảu biến, từ đó định nghĩa được các giá trị so sánh
//Dùng khi số lượng case lớn hơn 3

var date2 = 2;
switch(date2) {
    case 2: //sử dụng toán tử === để so sánh giá trị của biến với giá trị trong case.
        console.log ('Monday');
        break//nếu ko break, tính từ case đúng, tất cả code trong các case tiếp theo được thực thi 
    case 3: 
        console.log ('Tuesday');
        break
    case 4: 
        console.log ('Wednesday');
        break
    case 5: 
        console.log ('Thursday');
        break
    default:
        console.log ('Chịu');
}

var date3 = 2;
switch(date2) {
    case 2: 
    case 3:        
    case 4: 
        console.log ('Bad days');
        break
    case 5: 
        console.log ('Thursday');
        break
    default:
        console.log ('Chịu');
}

//TERNARY OPERATER - TOÁN TỬ 3 NGÔI

var course = {
    name : 'JS',
    coin: 250,
}

//Xử lý với if/else
if (course.coin > 0 ) {
    console.log (`Giá: ${course.coin} coins`);
}
else {
    console.log ('Free')
}

//Xử lý với toán tử 3 ngôi
var result = course.coin > 0 ? `Giá: ${course.coin} coins` : 'Free';
console.log (result)

var a = 1;
var b = 2;
var c = a > 0 ? a : b;
console.log(c);

