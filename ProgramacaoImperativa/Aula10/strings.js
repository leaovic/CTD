//length

// console.log("ola eu sou o Victor".length);

let texto = "ola eu sou o Victor"
console.log(texto.length);

//indexOf
console.log(texto.indexOf("eu"))

//slice
// console.log(texto.slice(0,4))

let palavra = texto.slice(0,4);
console.log(palavra)
console.log(texto)

//trim
console.log(texto.trim())

//split
console.log(texto.split(" "))

//replace
console.log(texto.replace("o Victor", "a Amanda"))
let textoNovo = texto.replace("o Victor","a Monteiro")
console.log(textoNovo)