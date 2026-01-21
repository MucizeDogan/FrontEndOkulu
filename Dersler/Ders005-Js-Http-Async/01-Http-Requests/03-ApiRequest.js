document.getElementById("getButton").addEventListener("click", getData);

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            const list = document.getElementById("MyDataTable");
            data.forEach(item => {
                const tr = document.createElement("tr");

                const tdUserId = document.createElement("td");
                tdUserId.textContent = item.userId;

                const tdId = document.createElement("td");
                tdId.textContent = item.id;

                const tdTitle = document.createElement("td");
                tdTitle.textContent = item.title;

                const tdBody = document.createElement("td");
                tdBody.textContent = item.body;

                tr.appendChild(tdUserId);
                tr.appendChild(tdId);
                tr.appendChild(tdTitle);
                tr.appendChild(tdBody);

                list.appendChild(tr);
            });
        }
    }
    xhr.send();
}