const button = document.querySelector('#button');
button.addEventListener('click',function(){
    const userName = document.querySelector('#username');
    const pass = document.querySelector('#password');
    const contentOfUsername = document.createTextNode(userName.value);
    const contentOfPass = document.createTextNode(pass.value);

    // creating td & td
    const tdForUser = document.createElement('td');
    const tdForPass = document.createElement('td');

    // appending td & td
    tdForUser.appendChild(contentOfUsername);
    tdForPass.appendChild(contentOfPass);

    // creating tr
    const tr = document.createElement('tr');

    // append of tr
    tr.appendChild(tdForUser);
    tr.appendChild(tdForPass);

    // append of table
    const table = document.querySelector('#table');
    table.appendChild(tr);
    userName.value = "";
    pass.value = "";
})