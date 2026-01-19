document.getElementById("veri").addEventListener("click", function(){
    //XMLHttpRequest nesnesi oluşturma = xhr 
    const xhr = new XMLHttpRequest();
    console.log(xhr); //XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
    // İstek oluşturma
    xhr.open("GET", "Data.txt", true); // İStek ne, Verinin çekileceği yer, asenkron ture false
    xhr.send(); // İStek şu anda gönderildi.
    //Response da "Merhaba, ben bir datayım." ı çekmiş olduk
})

// Veri çekilirken readyState durumuna göre işlem yapılabilir.
document.getElementById("veri").addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){ //ready state değişme eventi
        if(xhr.readyState == 4 && xhr.status == 200){ //Eğer benim datam işlendi çekilde ve 200 başarılıysa
            console.log("İstek başarılı, data geldi: " + xhr.responseText);
        }
    }
    xhr.open("GET", "Data.txt", true);
    xhr.send();
})