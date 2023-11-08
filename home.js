import users from './users.json' assert {type: 'json'}

const userList = document.getElementById("UsersList")
let people = document.getElementById("people")
people.addEventListener("input", searchPeople)

function showPoeples() {
    const showinPeoples = users.map((data) => userList.innerHTML += `<p class="user" id="${data.nome}">${data.nome}</p>`)
}

function searchPeople(){
    userList.innerHTML = ""
    const searching = users.filter(data => data.nome.toLocaleLowerCase().includes(people.value.toLocaleLowerCase()))  
    
    if (/^\s*$/.test(people.value)) 
        showPoeples()
    else 
        searching.map((data) => userList.innerHTML += `<p class="user" id="${data.nome}">${data.nome}</p>`)
}

showPoeples()