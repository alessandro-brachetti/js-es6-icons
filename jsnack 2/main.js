//JSNACK 2
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
//ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const myFunction = (array, a, b) => {
  const newArray = array.slice(a, b + 1);
  return newArray
};


console.log(myFunction(numeri, 3, 8));



const myFunction2 = (array, a, b) => {
  if (b < a) {
    let temp = b;
    b = a;
    a = temp;
  }
  const arrayFiltered = array.filter((element, index, array) => {
      return index >= a && index <= b
    });

  return arrayFiltered

};


console.log(myFunction2(numeri, 6, 2));
