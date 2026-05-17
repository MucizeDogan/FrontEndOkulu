function MyGetTextFile(){
    //fetch("Data.txt")
        //.then((response) => console.log(response.text())); // -Bu şekilde iken [[PromiseResult]] "Merhaba, ben bir datayım." şeklinde dönüyor.

    fetch("Data.txt")
        .then((response) => response.text())
        .then((data) => console.log(data)); //Nu şekilde responsedan gelen verinin yani result u bir daata değişkenine alıp direkt veriyi yazdırmış olduk


}

document
    .getElementById("btnGetText")
    .addEventListener("click", MyGetTextFile);
//MyGetTextFile();