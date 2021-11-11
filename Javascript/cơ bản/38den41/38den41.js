var fmailKey = 'fmail';

var myInfo = {
    name: 'Hung Nguyen',
    age: 24,
    address: 'Hanoi, Vietnam',
    [fmailKey]: 'wtf',
    getName: function() {
        return this.name;
    }
};

myInfo.email = 'hhung';
myInfo['my-email'] = 'hung@gmail.com';

console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo['address']);

var myKey = 'address';
console.log(myInfo[myKey]);

delete myInfo.email
console.log(myInfo);

console.log (myInfo.getName())

console.log ('----------------------------------------------------');

//Object Contructor

function User (firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //this tượng trưng cho đối tượng gọi tới, ở đây là User
    this.getName = function(fullname) {
        return fullName = `${this.firstName} ${this.lastName}`;
    } //this tượng trưng cho đối tượng gọi tới, ở đây là author hoặc user
    
}

var author = new User ('Hung', 'Nguyen', 'Avatar');
var user = new User ('Em', 'Vy', 'Avatar');

author.title = 'siêu nhân';
user.comment = 'dev quèn';
//thêm thuộc tính sau khi tạo đối tượng từ Object constructor, 
//chỉ đối tượng đó có thuộc tính vừa được thêm.

//Vậy thêm 1 thuộc tính chung cho Object constructor như thế nào?
User.prototype.className = 'Space';
//thuộc tính này được thêm vào phần __proto__ của object chứ không thêm trực tiếp bên trong {} 
console.log (author.className);
console.log (user.className);

User.prototype.getClassName = function(){
    return this.className;
}    

console.log (author.getClassName());

console.log(author);
console.log(user);
console.log(author.constructor === User);
console.log(author.getName());
console.log(user.getName());

// có thể dùng cách viết function khác đeer tạo Object constructor 
var User = function(firstName, lastName, avatar) {
    // ....v....v...
}

console.log ('-------------------------------------------------');

//ĐỐI TƯỢNG DATE

var date = new Date();
console.log (typeof date);
console.log (date);
var year = date.getFullYear()
console.log(year);
var month = date.getMonth() + 1;
console.log(month);
var hours = date.getHours();
console.log(hours)

console.log (`${year} ${month} ${hours}`);

var date1 = Date();
console.log(typeof date1);
console.log(date);








