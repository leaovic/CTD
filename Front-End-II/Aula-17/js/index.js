
function chamarApi() {
    
    fetch('https://randomuser.me/api/')
    .then(resposta => {
        return resposta.json()
        })
        .then(user => {
            renderizarDadosUsuario(user)
        });
    }
    
    chamarApi()
    let img = document.querySelector('#foto')
    let nome = document.querySelector('#nome')
    let email = document.querySelector('#email')
    let registro = document.querySelector('#registro')

    let criarNovoUsuario = document.querySelector('#result');

function renderizarDadosUsuario(users) {

    img.src = `${users.results[0].picture.large}`
    nome.innerText = `${users.results[0].name.first} ${users.results[0].name.last} `
    email.innerHTML = `<b>Email: </b>${users.results[0].email}`
    registro.innerHTML = `<b>ID: </b>${users.results[0].id.value}`
}



criarNovoUsuario.addEventListener('click', () => {
    chamarApi()
})
