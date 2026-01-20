document.getElementById("getButton").addEventListener("click", getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","users.json", true);
    xhr.onload = function(){ //.onload -> xhr yüklendiğinde demek yani bir nevi ready state = 4 gibi yani
        let list = document.getElementById("employees");
        if(xhr.status == 200){
            let data = JSON.parse(xhr.responseText); //response bana string olarak geldiği için json olarak parse ediyorum.
            data.forEach(item => {
                // list.innerHTML += `
                // <tr>
                //     <td>${item.name}</td>
                //     <td>${item.department}</td>
                //     <td>${item.salary}</td>
                // </tr>
                // `;


                const tr = document.createElement("tr");

                const tdName = document.createElement("td");
                tdName.textContent = item.name;

                const tdDepartment = document.createElement("td");
                tdDepartment.textContent = item.department;

                const tdSalary = document.createElement("td");
                tdSalary.textContent = item.salary;

                tr.appendChild(tdName);
                tr.appendChild(tdDepartment);
                tr.appendChild(tdSalary);

                list.appendChild(tr);
            });
        }else{
            console.error("Data alınamadı. Status: ", xhr.status);
        }
    }
    xhr.send    ();
}

