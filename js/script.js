// TimeOut  ---------------------
/* 
let myTo = setTimeout(() => {
  console.log('huhu!');
}, 5000); */                       // alle 5 sekunden zeigt in Konsole

/* console.log(myTo); */

// !!!!!!  setTimeout(was Soll Passieren, wann Solls Passieren);   !!!!!!!


//INTERVAL ----------------------

// let sekunden = 3;

/* let myInt = setInterval(() => {
  console.log('huhu!');
}, 2000);  */                    // alle 2 sekunden zeigt in Konsole    / 1000 + 1000  /    sekunden * 1000);

//  !!!!!    setInterval(was Soll Passieren, in Welchen Abständen Solls Passieren);   !!!!!!!!

/* let counter = 1;                              
let myInt = setInterval(() => {
  console.log('huhu!' + counter);           // in Konsole zeigt  alle 2 sekunden :   huhu! 1  huhu! 2 ... bis die seite geoffnet ist.
  counter++;
}, 2000); */


const btnGo = document.querySelector('#btn-go');
const btnStop = document.querySelector('#btn-stop');
let myInterval;
let counter = 1;

btnGo.addEventListener('click', () => {
  myInterval = setInterval(() => {
    console.log('Hallo!' + counter);
    counter++;
  }, 1000);
});                                                     // ID existiert, aber noch nie gespeichert niergendwo.

btnStop.addEventListener('click', () => {
  clearInterval(myInterval);
});





const clickQuadrat = document.querySelector('#myQuadrat');

clickQuadrat.addEventListener('click', () => {       // , (e) => {
  clickQuadrat.style.backgroundColor = '#00f7ff';    // e.target.style.backgroungColor = '';
  console.log('Color change in blue');
    setTimeout(() => {
      clickQuadrat.style.backgroundColor = '#1df800';
      console.log('Color rechange in green');
    }, 2000);
  }, )


  const clicKrise = document.querySelector('#myKrise');

  clicKrise.addEventListener('click', () => {
    clicKrise.style.backgroundColor = '#51ff00';
    console.log('Color change in green');
    setTimeout(() => {
      clicKrise.style.backgroundColor = '#ebfc00';
      console.log('Color rechange in yellow');
    }, 2000);
  }, )



//  !!!!!!     addEventListener(Welche Event, Was Soll Passieren);  !!!!!!
// !!!!   Methode - bedeutet, sie muss etwas zu tun.  !!!!!!! 



/* 
//!!!!!    VARIANTEN ZU VERSTEHEN   !!!!

function doStuff () {
  console.log('Stuff!');
}

setTimeout(was Soll Passieren, wann Solls Passieren);
setInterval(was Sol lPassieren, in Welchen Abständen Solls Passieren); 
addEventListener(Welche Event, Was Soll Passieren); 

// VARIANTE 1
setTimeout(doStuff, 1000);
setInterval(doStuff, 1000); 
addEventListener('click', doStuff); 

// doStuff('lala');

// VARIANTE 2
setTimeout(function () {
  console.log('lala');
}, 1000);

setInterval(function () {
  console.log('lala');
}, 1000); 

addEventListener('click', function () {
  console.log('lala');
});


// VARIANTE 3
setTimeout(() => {
  console.log('lala');
}, 1000);

setInterval(() => {
  console.log('lala');
}, 1000); 

addEventListener('click', () => {
  console.log('lala');
});  */