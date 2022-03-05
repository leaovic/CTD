const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

var arr = [1,2,3,4];
var soma = arr.reduce(function(soma, i) {
    return soma + i;
});
console.log(soma);


