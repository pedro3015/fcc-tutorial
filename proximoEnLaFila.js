function proximoEnLaFila(arr, elem) {
  arr.push(elem); //Agrega al final del arreglo
  return arr.shift(); //Elimina el primer elemento del arreglo
}

var miArreglo = [1, 2, 3, 4, 5];

console.log("Antes " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues " + JSON.stringify(miArreglo));
