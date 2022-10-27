// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma = 0;
    for (i=1; i<11; i++){
      suma = suma+ i;
    }
    return suma
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var array1=[];
  for (i=0, y=0; i<=array.length; i++){
    if ((array[i]%2)==0){ 
      array1[y]=array[i];
      y++;    
    }
  }
  return array1
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arrayCuadrado=[]
  for (i=0; i<array.length; i++){
    arrayCuadrado[i]= array[i]**2
  }
  return arrayCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let sumaArray=0
  for (i=0; i<array.length; i++){
    sumaArray=array[i]+ sumaArray;
  }
  return sumaArray
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  numString= String(num);
  numArray= numString.split("")
  return numArray.length  
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
