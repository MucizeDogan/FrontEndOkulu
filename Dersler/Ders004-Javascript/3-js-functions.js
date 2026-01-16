// FONKSİYONLAR

function MyGetShowMessage(){
    console.log("Mesaj gösteriliyor...");
}
MyGetShowMessage();

function MyGetShowMessage2(pName){
    console.log(`Mesaj gösteriliyor... Sayın ${pName}`);
}
MyGetShowMessage2("MUCİZE");



// function yasKontrolu(yas) {
//   if (yas > 18) {
//     return true;
//   } else {
//     return confirm('Ebevenylerinin izni var mı?');
//   }
// }

// let yas = prompt('Kaç yaşındasın?', 18);

// if ( yasKontrolu(yas) ) {
//   alert( 'İzin verildi' );
// } else {
//   alert( 'Reddedildi' );
// }

//ÖRNEK
//min(a,b) adında bir fonksiyon yazın. a veya b den küçük olanını döndürsün.
function min(a,b){
    if(a<b){
        return a;
    }else if(b<a){
        return b;
    }else{
        return "EŞİT";
    }
}
console.log(min(3,5));
console.log(min(5,5));

//üs alma ÖRNEK
function usAl(x,n){
    let result=x;
    for( let i = 1; i<n; i++){
     result *= x;   
    }
    return result;
}
console.log(usAl(3,4));


/* Geriçağrım Fonksiyonları ( CALLBACK FUNCTIONS ) */
function sor(soru, evet, hayir) {
  if (confirm(soru)) evet()
  else hayir();
}

function tamamGoster() {
  console.log("Kabul ettiniz");
}

function iptalGoster() {
  console.log("Çalışmasını durdurdunuz");
}
// kullanım: tamamGoster, iptalGoster fonksiyona parametre olarak gönderilmiştir.
sor("Kabul ediyor musunuz?", tamamGoster, iptalGoster);
