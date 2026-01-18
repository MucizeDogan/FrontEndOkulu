let value;

value = document;

console.log(value);

/* DOM */
/*Bir HTML belgesinin omurgası etiketlerdir.

Document Object Model (DOM)’ a göre, her HTML etiketi bir nesnedir. İç içe geçmiş etiketlere, çevreleyen etiketin “alt öğeleri” denir.

Bir etiketin içindeki metin de bir nesnedir…

Tüm bu nesnelere JavaScript kullanılarak erişilebilir.

Tüm belgeyi temsil eden document nesnesi, resmi olarak bir DOM düğümüdür

12 düğüm tipi vardır. Pratikte genellikle 4 tanesiyle çalışırız:

document – DOM’a “giriş noktasıdır”.
eleman düğümleri – HTML etiketleri, ağaç yapı taşları.
metin düğümleri – metin içerir.
yorumlar – bazen bilgileri oraya koyabiliriz, kullanıcıya gösterilmez, ancak JS bunu DOM’dan okuyabilir.

*/

value = document.location;
value = document.location.hostname; //127.0.0.1
value = document.scripts[0].getAttribute("src");
value = document.links[document.links.length - 1].getAttribute("href"); //#
value = document.links[document.links.length - 1].getAttribute("class"); //link link4
value = document.links[document.links.length - 1].classList; //link link4 ama array olarak dönüyor.

console.log(value);

// ID ile element seçimi
let value2;

value2 = document.getElementById("form-input"); //<input type="text" class="mt-3" id="form-input"> direkt bunu döner bu şekilde
value2 = document.getElementById("title").innerText; //Başlık Test

console.log(value2);

//CLASS ile element seçimi
let value3;

value3 = document.getElementsByClassName("link"); // List olarak döner
value3 = document.getElementsByClassName("link")[0]; //<a href="#" class="link">Test Link 1</a>
value3 = document.getElementsByClassName("link")[0].innerText; //Test Link 1

console.log(value3);

//TAG ile element seçimi
let value4;

value4 = document.getElementsByTagName("a"); //array döndü
value4 = document.getElementsByTagName("a")[2].innerText; //Test Link 3

console.log(value4);

// QUERY Selector
let value5;

value5 = document.querySelector("#title").innerText; //Başlık Test //# şekilde verdiğin için id si title olan var mı diye bakıyor.
value5 = document.querySelector(".link").innerText; //Test Link 1  //link classına sahip ilk elementi getirir

console.log(value5);


//Query Selector All
 let value6;

value6 = document.querySelectorAll("a");
// All da a ya sahip bütün elementleri NodeList array olarak döner
value6 = document.querySelectorAll("a")[document.querySelectorAll("a").length - 1].innerText;
//Test Link 4
 console.log(value6);


 // ELEMAN OLUŞTURMA
 const button = document.createElement("button");
 button.id = "MyBtn";
 button.className = "btn btn-primary mt-3";
 button.innerText = "DOM Boş Buton";


 const button2 = document.createElement("a");
 button2.id="MyBtn2";
 button2.className = "btn btn-outline-primary mt-3";
 button2.innerText = "DOM Buton - 2";
 button2.href = "https://www.google.com.tr";
 button2.target = "_blank" //Yeni sekmede açtırır;

 const divSec = document.getElementById("divForButton"); //Butonumu içine ekleyeceğim div i buldum
 divSec.appendChild(button);
 divSec.appendChild(button2);
 
