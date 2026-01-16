//Object örnekler

const student = {
    fullName: "Mucize Doğan Sarıkürkcü",
    age:25,
    address:{
        city:"Afyonkarahisar",
        country:"Türkiye",   
    },
    langs:["C#","JavaScript", "Java"],
    work: function(){
        console.log("work Çalışıyor");
    }
}

let value;

value = student;
value = student.address.city; //Afyonkarahisar
value = student.langs[0]; //C#
value = student.work(); //work Çalışıyor

//console.log(value);

//Date
let date = new Date();

value = date; //Fri Jan 16 2026 17:23:39 GMT+0300 (GMT+03:00)
value = date.getDate(); //16 //Ayın günün verir.
value = date.getDay();//5 Haftanın günü -> 0 Pazar
value = date.getFullYear();//2026
value = date.getHours(); //17
value = date.getMinutes();//27
value = date.getSeconds();//23
value = `Tarih: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;//16.1.2026 //Month 0 dan başlıyor.

console.log(value);


// if için örnek-
// let value1="";
// let value2="";
// let ask1 = "Who's there?";
// let ask2 = "Password?";
// let Cancel = "Canceled";
// let Admin = "Admin";
// let Password = "TheMaster";

// value1 = prompt(ask1);
// if(value1 == Admin){
//     value2 = prompt(ask2);
//     if(value2 == Password){
//         alert("Welcome :)");
//     }else if(value2 == "" || value2 == null){
//         alert(Cancel);
//     }else{
//         alert("Wrong Password");
//     }
// }else if(value1 =="" || value1 == null){
//     alert(Cancel);
// }else{
//     alert("I don't know you " + value1);
// }

// 2 den 10 kadar olan çift sayıları yazdırma döngü ile
// for(let i = 2; i<10 ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// } 

