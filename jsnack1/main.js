//JSNACK 1
//Creare un array di oggetti: con le seguenti proprietà: nome e peso.
const bikes = [
  {
    nome: 'Pinarello',
    peso: 10
  },
  {
    nome: 'Bianchi',
    peso: 15
  },
  {
    nome: 'Focus',
    peso: 14
  },
  {
    nome: 'Lombardo',
    peso: 9
  },
  {
    nome: 'Equalized',
    peso: 13
  },
];
//Stampare a schermo la bici con peso minore.
let min = bikes[0].peso;

bikes.forEach((item, i) => {
  if (item.peso < min) {
    min = item.peso
  }
});

let bikeMin = bikes.filter((item, i) => item.peso == min);

$('#bike').text(`La bici con il peso minore è la ${bikeMin[0].nome} e il suo peso è di ${bikeMin[0].peso} Kg `);
