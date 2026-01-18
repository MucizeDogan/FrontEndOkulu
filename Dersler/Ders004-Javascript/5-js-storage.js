// Local Storage ve Session Storage
/* Local Storage biz silene kadar hep kalıyor yaşamaya devam ediyor. Session ise session kapndığında bitiyor.
Tarayıcı kısmında depolama - Yerel depo -> Local storage
Oturum deposu -> session storage   
local storage sadece string tutar.
Her iki depolama nesnesi de aynı yöntemleri ve özellikleri sunar:

setItem(key, value)– Anahtar/değer çiftini saklayın.
getItem(key)– Anahtar kullanarak değeri alın.
removeItem(key)– Anahtarı değeriyle birlikte kaldırın.
clear()– Her şeyi silin.
key(index)– Belirtilen konumdaki anahtarı alın.
length– depolanan ürün sayısı.
*/

/* Local Storage */
let userName = "Mucize";
localStorage.setItem("userName", userName); //localstorage ye veri ekledik.

let localUserName = localStorage.getItem("userName");
console.log("Local Storage userName: " + localUserName);

let age = 30;
localStorage.setItem("yas", age);
let localAge = Number(localStorage.getItem("yas")); //string gelen ifadeyi number a dönüştürerek çektik
console.log("localAge: " + localAge + " type: " + typeof localAge);

//Object-local
let user = {
    name: "Mucize Doğan",
    age: 25,
    city: "Antalya",
    langs: ["C#", "Javascript", "React"]
};
localStorage.setItem("user", JSON.stringify(user)); //object türündeki veriyi JSON.stringfy ile stringe çevirip saklar.

let localUser = JSON.parse(localStorage.getItem("user")); //string olarak aldığımızı objecte dönüştürdük.
console.log(localUser);
console.log(typeof localUser);

//Array-local
let users = [
    {name:"Miracle", age: 25},
    {name:"Ali", age: 35},
    {name:"Veli", age: 45},
    {name:"Deli", age: 50},
];
localStorage.setItem("users", JSON.stringify(users));
let localUsers = JSON.parse(localStorage.getItem("users"));

console.log(localUsers);
console.log(typeof localUsers);

localUsers.map((user) => console.log(user.name));

localUsers.map((user) => document.writeln(`<p>${user.name}</p>`)); //Array i dolaşıp name lerini p olarak sayfaya yazdırdık.


/* Session Storage */
/* Local Storage ile her yazım aynı sadece localStorage yerine sessionStorage yazıyoruz bu kadar.  */



/* Spread Operator */
const langs = ["C#", "Java", "Javascript", "Python"];
const numbers = ["1", "3", "6", "5"];
let sonuc;

sonuc = [...langs, ...numbers]; // iki arrayi birleştirdik.
sonuc = [...langs, "React", "9", ...numbers]; // Bu şekilde araya eleman da ekleyebiliriz.
console.log(sonuc);


/* Destructuring */
let user2 = {
    name2:"Mucize Dogis",
    age2:26,
    city:"Afyon",
    langs: ["1.", "2.", "3.", "4."]
}
// örneğin burada sadece name ve age lazım gerisi object olarak kalabilir.
let {name2, age2, ...geriKalanlar} = user2; //ihtiyacımız olan name2 ve age2 yi alıp ...degisken adı verip gerisi object olarak bıraktık ... destructing yaptık
console.log(name2,age2,geriKalanlar);//Mucize Dogis 26 {city: 'Afyon', langs: Array(4)}
