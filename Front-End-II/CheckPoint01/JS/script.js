

function criarartes(event) {
  event.preventDefault()
  let nome = document.querySelector('#nome').value
  let desc = document.querySelector('#desc').value
  let imagem = document.querySelector('#image').value
  let list = document.querySelector('#lista-sonho')

  
  

  




 

  const novaarte = document.createElement('div')
  novaarte.setAttribute('class', 'sonho')
  novaarte.innerHTML = `
    <div class="imagem-container">
      <img src="${imagem}"/>
    </div>
    <h3>${nome}</h3>
    <h4>${desc}</h4>
    
  `
  list.appendChild(novaarte)
  console.log(novaarte)
}
let botao = document.querySelector('#botao')
