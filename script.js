//const number = document.querySelector('#no')
//const numberOneOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


//eleman sayısı
//document.write(numberOneOne.length);

//elemanları sıralamak
//document.write(numberOneOne.sort());

//ne tür veri türü olduğu
//document.write(typeof(numberOneOne[4]));

//yeni eleman eklemek
//numberOneOne.push("16");

//console.log('number')

//elemanların toplamı
/*let toplam = 0;
    numberOne.forEach(function(element){
       toplam+=Number(element); 
    });
    window.alert(toplam); */


const $ = (par) => document.querySelector(par);

let numberOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function sum() {
  let sum = 0;

  numberOne.forEach((element) => {
    sum += element;
  });

  $("#result").innerHTML = "Result: " +  sum;
}

function totalelement() {
  $("#result").innerHTML = "Result: " +  numberOne.length;
}

function odd() {
  let odd = numberOne.filter((n) => n % 2 == 1);
  $("#result").innerHTML =  "Result: " + odd;
}

function even() {
  let even = numberOne.filter((n) => n % 2 == 0);
  $("#result").innerHTML = "Result: " + even;
}
