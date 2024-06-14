// Funzione per generare le celle

function generateCells(gridContainer) {
    // creazione ciclo per la creazione delle 100 celle 
    for (let i = 1; i <= 100; i++) {
        // creazione elemento div per le celle
        const cell = document.createElement('div');
        // aggiungiamo la classe cella ad ogni singolo elemento creato in questo caso i div
        cell.classList.add('cell');

        cell.textContent =  i;
       

        // creazione funzione per generare l evento al click delle celle 
        cell.addEventListener('click', 
            function() {
                //  aggiungiamo il toggle al clicked per le celle in modo tale da poterle ri cliccare e deselezionare nuovamente il colore
                cell.classList.toggle('clicked');
                // verifica in console della cella cliccata
                console.log('Numero cella cliccata:', i);
            }
        );
                // stampiamo appendendo alle celle all'interno del grid container
                gridContainer.append(cell);
    }
}



//  funzione per capire se la parola inserita è palindroma

// function palindroma(parola){


//     //  *      //  *      //  *     //  *   //FORMA COMPATTA // //  *      //  *     *   // //   
//     let parolaInversa = parola.split('').reverse().join('');
//     //  *      //  *      //  *     //  *   // // //  *      //  *      //  *     //  *   // // 

//          // Controllare se la parola originale è uguale alla parola invertita utilizzando return per prenderne il vaolore del risultato finale
//             return parola === parolaInversa;

// }

// // Verifichiamo se la parola inserita è palindroma con una condizione
// if (palindroma(InputUtente)) {
//     alert("La parola inserita è palindroma.");
//   } else {
//     alert("La parola inserita non è palindroma.");
//   }

    // 1 Applichiamo il metodo split a parola per dividere la parola inserita dall utente in un array di singoli elementi contenenti ogni carattere singolo di cui e composta la parola
    
     // DIVIDIAMO la parola
    //  let arrayParolaDivisa = parola.split('');
    //     // verificare 
    //         console.log(arrayParolaDivisa);

    // // INVERTIAMO la parola
    //  // utilizzandro reverse Inverte l'ordine degli elementi nell'array della parola inserita
    // let ArrayParolaInversa = arrayParolaDivisa .reverse();
    //     // verificare
    //         console.log( ArrayParolaInversa);

    // // uniamo gli elementi dell'array dato dalla parola inserita dall utente ed la divisione e l inversione
    // //  uniamo tutti gli elementi dell'array in una singola stringa con split
    //     let parolaInversa = ArrayParolaInversa.Join('');
    //     // verificare
    //         console.log(parolaInversa);

   



                            // PARI E DISPARI!!

                            // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Funzione per generare un numero random da 1 a 5



// function numeroRandom(min,max) {
//   return Math.floor(Math.random() * 5) + 1;
// }


// // somma dei due numeri utente + pc n1-n2
// function sommaNumeri(num1, num2){
//   return num1 +  num2;
// }

// // controllo dei numeri se pari o dispari
  
// function pariOdispari(numero){
//   if (numero % 2 === 0) {
//       return "pari";
//   } else {
//       return "dispari";
//   }
// }

// // controllare chi sarà il vincitore tra utente e pc 
// function vincitoreOperdente(risposta1, risposta2) {
//   if(risposta1 === risposta2) {
//       return "give me my money";
//   }else {
//       return "Sborsa i soldi";
//   }
// }





