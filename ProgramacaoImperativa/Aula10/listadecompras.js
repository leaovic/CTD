let listaDeCompras = ["pera","uva","maca","banana","abacaxi","maracuja","melancia"]

// push() {adiciona um ou mais elementos ao final de uma array}
listaDeCompras.push("melao","laranja")
console.log(listaDeCompras)

//pop() {Elimina o ultimo elemento de um array}
let ultimaFruta = listaDeCompras.pop();
console.log(listaDeCompras)
console.log(ultimaFruta)
listaDeCompras.pop()
console.log(listaDeCompras)

//shift()  {Elimina o primeiro elemento de um array}
let primeiraFruta = listaDeCompras.shift()
listaDeCompras.shift()
console.log(listaDeCompras)
console.log(primeiraFruta)

//unshift() {Adiciona um ou mais elementos ao inicio de um array}
listaDeCompras.unshift("siriguela")
console.log(listaDeCompras)
let adicionaFruta = listaDeCompras.unshift()
console.log(adicionaFruta)

//join() {Junta elementos de um array usando um separador que especificamos}
let separadosPorVirgula = listaDeCompras.join(", ") //usei um espaco para ficar na norma culta
console.log(separadosPorVirgula)