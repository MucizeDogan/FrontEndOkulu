function MyGetTextFile(){
    //fetch("Data.txt")
        //.then((response) => console.log(response.text())); // -Bu şekilde iken [[PromiseResult]] "Merhaba, ben bir datayım." şeklinde dönüyor.

    fetch("Data.txt")
        .then((response) => response.text())
        .then((data) => console.log(data)) //Bu şekilde responsedan gelen verinin yani result u bir data değişkenine alıp direkt veriyi yazdırmış olduk
        .catch((err) => console.log(err));
}

function MyGetJsonFile(yazdirmaSekli){
    switch(yazdirmaSekli){
        case 0:
        fetch("users.json")
            .then((response) => response.json()) // Json u alıp parse ediyoruz sonra değişkene atıp yazdırıyoruz. Array olarak dönüyor.
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        break;
        case 1:
        fetch("users.json")
            .then((response) => response.json())
            .then((data) => data.map((user) => console.log(user.name, user.department, user.salary)))
            .catch((err) => console.log(err))
        break;
    }
    
}

document
    .getElementById("btnGetText")
    .addEventListener("click", MyGetTextFile);
//MyGetTextFile();


//document.getElementById("btnGetJson").addEventListener("click", MyGetJsonFile(0)); // bu şekilde parametreli de bu şekilde kullanırsan event çalışmıyor
document
    .getElementById("btnGetJson")
    .addEventListener("click", () => MyGetJsonFile(1)); // parametreli yapıda arrow function kullanmalıyım ki çağırınca çalışsın