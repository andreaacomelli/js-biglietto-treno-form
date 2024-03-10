const buttonElement = document.getElementById('submit');

const kmInputElement = document.getElementById('km');
const ageInputElement = document.getElementById('age');

const resultElement = document.getElementById('result');

buttonElement.addEventListener('click', function(){

  const km = parseInt(kmInputElement.value);
  const age = parseInt(ageInputElement.value);

  let costoBase = (km * 0.21);
  console.log(costoBase);

  let sconto

  if (age < 18){
    sconto = costoBase * 0.2;
  }
  else if (age > 65){
    sconto = costoBase * 0.4;
  }
  else{
    sconto = 0;
  }

  let costoFinale = costoBase - sconto;

  resultElement.innerHTML = 'Il costo del biglietto è: ' + costoFinale.toFixed(2) + ' euro';
})