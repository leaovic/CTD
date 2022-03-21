
// function criarartes(event) {
//     event.preventDefault()
//     let nome = document.querySelector('#name').value
//     let email = document.querySelector('#email').value
//     let imagem = document.querySelector('#image').value
//     let list = document.querySelector('#lista-sonho')
  
    
    
  
    
  
  
  
  
   
  
//     const novaarte = document.createElement('div')
//     novaarte.setAttribute('class', 'sonho')
//     novaarte.innerHTML = `
//       <div class="imagem-container">
//         <img src="${imagem}"/>
//       </div>
//       <h3>${nome}</h3>
//       <h4>${desc}</h4>
      
//     `
//     list.appendChild(novaarte)
//     console.log(novaarte)
//   }
//   let botao = document.querySelector('#botao')




  let nomeESbrenome = document.getElementById('nome');
  let idade = document.getElementById('idade');
  let altura = document.getElementById('altura');
  let biografia = document.getElementById('biografia');

  let botaoSalvar = document.getElementById('salvar');
  


  botaoSalvar.addEventListener('click', function(evento) {

    evento.preventDefault();

    console.log(nomeESobrenome.value);
    console.log(idade.value);
    console.log(altura.value);
    console.log(biografia.value);
  } )