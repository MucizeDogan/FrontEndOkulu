// Javascript Başlangıç
console.log("Merhaba MIRACLE"); 

//DEĞİŞKENLER
//var, let, const değişken tanımlama tipleridir. var artık nadir kullanılıyor o üzden kullanmaya gerek yok.
// let genel olarak kullanılır.
//const sabit değerler için kullanılır. sonradan değiştirlemez!

let a = 10;
console.log(a);
const pi = 3.14;
console.log(pi);

//Veri Tipleri
//String
let firstName = "Mucize Doğan";
console.log(firstName);
console.log(`Merhaba ${firstName}`); // `` bu tırnaklar arasında değişken verilerek kullanılabilir. Başında $ işareti olması lazım.


//Otomatik tip dönüşümü
let firstNumber = "20";
let secondNumber = 30;
let result = firstNumber + secondNumber;
console.log(result); //2030 //ikisinide string olarak dönüştürdü.
console.log(typeof result);//string

let result2 = firstNumber - secondNumber;
console.log(result2); //-10 //ikisinide number olarak dönüştürdü.
console.log(typeof result2);//number
/* + string de birleştirme olarak da kullandığı için örnekte 2030 oldu ama - nin çıkarmadan hariç bir
bir görevi olmadığı için number a dönüşüp çıkarma işlemi yaptı */

//hoisting
/* bir değişkenimiz var number1 atama yapmadan sadece tanımladık. bu şekilde yazdırdık.
Daha sonra değer atadık. bir de function tanımlayıp onu çağırdık. number1 undefined 
olarak çıkar deneme düzgün çalışır.
*/
let number1;
console.log(number1);
number1 = 49;
deneme();
function deneme(){
console.log("Deneme fonksiyonu çalıştı")
}

// Boolean
let isActive = true;
console.log(isActive);
console.log(typeof isActive);

let buyuk = 4<1;
console.log(buyuk);

// OBJECT
// Key - Value şeklindedir.
let kullanici2 = {}; // Bu şekilde boş olarak tanımlanabilir.
let kullanici = {     // obje
  isim: "Mahsun",  // isim anahtarı, Mahsun değerini tutar.
  yas: 30        // yaş anahtarı 30 değerini tutar.
};
console.log(kullanici);
console.log(kullanici.isim);
console.log(kullanici.yas);
kullanici.isAdmin=true; // bu şekilde sonradan da eklenebilir.

let user={
    name: "Mucize Doğan", //string
    age: 25, //number
    isActive: true, //boolean
    notes: {math:70, science:80, chemical: 90}, // Kendi gibi object
    favoriteColors: ["Red", "Green", "Blue"], //Array
    showData: function(){
        console.log("showData fonksiyonu çalıştı");
    }, // fonksiyon
};

console.log(user);
console.log(user.showData());

//Array
let names = ["Ahmet", "Mehmet", "Mucize", "Ayşe"]
console.log(names);
console.log(names[2]);
console.log(names.length);

//FONKSİYONLAR
function MyGetMerhaba(){
    console.log("MERHABALAR");
}
MyGetMerhaba();
function MyGetMerhaba2(pMessage){
    console.log(pMessage);
}
MyGetMerhaba2("Parametreli Merhaba");


//EXAMPLES
let x = 10;
let y = x;
console.log("1- ", x, y); // 10 10
x=20;
console.log("2- ", x, y); // 20 10

let x2 = [10];
let y2 = x2;
console.log("1- ", x2, y2); // [10] [10]
x2=[20];
console.log("2- ", x2, y2); // [20] [10]
console.log("3- ", x2 * y2); //200
/*Eğer arrayin içinde tek bir rakam varsa primitive bir değer gibi çalışıyor yani number gibi*/

let a2 = { value: 10 };
let b2 = a2;
a2.value = 20;
console.log(a2.value, b2.value); // 20 20
// b2=a2 -> aynı nesnenin referansı kopyalanır

//ÖZET
/*
Tür	                        Davranış
number, string, boolean	    Değer kopyalanır
object, array, function	    Referans kopyalanır
*/

//Math Fonk
let sonuc;
sonuc = Math.round(3.6); // 4
sonuc = Math.sqrt(25); // 5
sonuc = Math.floor(Math.random() * 100 + 1)// 0 ile 00 arasında rastgele bir sayı sadece random da 58.798789 gibi gelir
console.log("Sonuç = ", sonuc);

// STRING Metodları
// Klasik length, tolowercase uppercase leri atladım.
let firstName2 = "Mucize Doğan";
let lastName2 = "Sarıkürkcü";
let city = "Afyonkarahisar";
let value;
value = firstName2.indexOf("e"); //->5 e harfi içeriyorsa kaçıncı index. İçermiyorsa -1 döner
value = firstName2.includes("d"); //->false. d Harfi içeriyor mu true false döner D olsaydı true
value = firstName2.concat(" " + lastName2 + " " + city); // diğer stringleri birleştirir.
value = firstName2.slice(0,3); //->Muc  0. indexten itibaren 3 karakter al
//Template Literals
value = `İsim: ${firstName2} 
Soyisim: ${lastName2} 
Şehir: ${city}`;
/* `` bu karakterlerle alt alta yazdığımızda sonuç olarak da alt alta yazar
İsim: Mucize Doğan 
Soyisim: Sarıkürkcü 
Şehir: Afyonkarahisar
*/
console.log(value);

//ARRAY METODLARI
const langs = ["Python", "Java", "C#", "JavaScript"];
const numbers = [3, 5, 2, 10, 15];
let value2;

value2 = langs.length; //4 //Eleman sayısını verir.
value2 = langs[0]; //Python //İlk Eleman
value2 = langs[langs.length-1]; //JavaScript //Son Eleman
value2 = langs.indexOf("Java"); //1 //Elemanın indexini verir.
value2 = langs.includes("C#"); //True //Eleman var mı?
value2 = numbers.push(21);//6 //Dizinin sonuna eleman ekler dönecek değer eklenen elemanın indexi olur
value2 = langs.unshift("React"); //Dizinin başına eleman ekler
value2 = numbers.pop(); //Dizinin sonundaki elemanı siler.
value2 = langs.shift(); //Dizinin başındaki elemanı siler.
value2 = langs.reverse();//['JavaScript', 'C#', 'Java', 'Python'] //Diziyi ters çevirir.
value2 = langs.sort();//['C#', 'Java', 'JavaScript', 'Python'] //Diziyi alfabetik olarak sıralar.
value2 = numbers.sort();//[10, 15, 2, 3, 5] //Yine alfabetik sıralıyor sayılara göre sıralamıyor.
value2 = numbers.sort(function (a,b){ //Fonksiyon aldırtıyoruz.
    return a-b; // Küçükten büyüğe sıralar
});//[2, 3, 5, 10, 15] //sort a parametre olarak fonksiyon verdik ve onun sayesinde küçükten büyüğe sıraladı.
value2 = numbers.sort(function (a,b){
    return b-a;
});//[15, 10, 5, 3, 2] // Büyükten küçüğe sıralatım

console.log(value2);

