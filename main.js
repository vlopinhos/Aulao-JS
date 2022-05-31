const form = document.querySelector("#formulario");

let strDados = localStorage.getItem("db");
let objDados = {};

if(strDados) {
    objDados = JSON.parse(strDados);
}else {
    objDados = {
        usuarios: [{
            email: "teste@email.com",
            user: "teste",
            password: "123"
        },
        {
            email: "adm@email.com",
            user: "adm",
            password: "124"
        }]
    };
}

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const strEmail = document.querySelector('#email').value;//pegar do documento
    const strUser = document.querySelector('#user').value;
    const strPassword = document.querySelector('#password').value;

    let novoUsuario = {
        email: strEmail,
        user: strUser,
        password: strPassword
    };

    objDados.usuarios.push(novoUsuario);
    
    localStorage.setItem("db", JSON.stringify(objDados));
});

const email = document.querySelector('#email');
email.addEventListener("blur", function() {

    if(email.value == '') {
        email.classList.add('vazio');
    }else {
        email.classList.remove('vazio');
    }
})
