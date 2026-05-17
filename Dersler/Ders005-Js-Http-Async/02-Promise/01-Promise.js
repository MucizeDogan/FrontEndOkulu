// PROMISE
/* Promise fonksiyonuna istek atılıyor, promise fonksiyonu gerekli şartlar sağlanırsa resolved
içinde bize data veriyor. sağlanmazsada reject içinde uyarı hata gönderir.  
*/

//Promise günlük hayattan örnek
/* Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size 
siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger
bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için 
müessesenin bize verdiği sözün (işte promise) bir göstergesi. 
Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. 
Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, 
ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. 
Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. 
Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya 
yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir. */

let examplePromise = new Promise(function (resolve, reject) {

});

/*Sonuçlanan promise objesinin dahili özellikleri şu şekildedir:

durum – ilk önce “bekleniyor (pending)” sonrasında “yerine getirildi” veya “red edildi” durumuna getirilir.
sonuç – ilk başlangıçta undefined’dır.
Çalıştırıcı işini bitirdiğinde, aşağıdaki fonksiyonları belirtilen argümanlar ile çağırmalıdır:

resolve(value) — işin başarılı bir şekilde bittiğini belirtir:
state’i "fulfilled"'e ayarlar,
result’ı value’a ayarlar.
reject(error) — bir hata olduğunu belirtir:
state’i "rejected"'e ayarlar,
result’ı error’a ayarlar. */

function getData(pData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof pData === "number") {
                let result = `Sonuç: ${pData * 2}`;
                resolve(result);
            } else {
                reject("Lütfen bir sayı girin...")
            }
        }, 2000); //2 sn gecikmeli getir dedik
    })
}

getData("Deneme")
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
// Buranın sonucu -> Lütfen bir sayı girin... çünkü string yolladık.

getData(10).then((res) => console.log(res)).catch((err) => console.log(err));
//Buranın sonucu -> Sonuç: 20

//Örnekler
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('runs after 3 seconds'));




