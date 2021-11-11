//CALLBACK HELL

setTimeout (function(){
    console.log('1')
    setTimeout (function(){
        console.log('1')
        setTimeout (function(){
            console.log('1')
            setTimeout (function(){
                console.log('1')
                setTimeout (function(){
                    console.log('1')
                    setTimeout (function(){
                        console.log('1')
                        setTimeout (function(){
                            console.log('1')
                            setTimeout (function(){
                                console.log('1')
                                setTimeout (function(){
                                    console.log('1')
                                    setTimeout (function(){
                                        console.log('1')
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)

//PROMISE CONCEPT

//Tao ra 1 promise
//Buoc 1: khoi tao bien tu object constructor Promise co san 
//Buoc 2: Xay dung constructor: la 1 ham (excutor) chua 2 bien resolve, reject (la 2 ham)

var promise = new Promise (
    //Excutor
    function (resolve, reject) {
        //Logic
        //Thanh cong: resolve()
        //That bai: reject ()
        //Luon phai goi 1 trong 2 function tren
        // resolve(123)
        reject ('Co loi!')
    }
)
// 3 trang thai cua promise
// - Pendding: cho, chua co resolve(), reject()
// - Fulfilled: resolve()
// - Rejected: reject()

//Su dung promise qua cac phuong thuc sau

promise
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error)        
    })
    .finally(function(){
        console.log('Done!')        
    })
//khi resolve() duoc goi, then() duoc goi
//khi reject() duoc goi, catch() duoc goi
//khi 1 trong 2 ham resolve, reject duoc goi, finally() dc goi
    