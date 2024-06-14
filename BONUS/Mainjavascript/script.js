// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.


// Variabile di riferimento per richiamare il button play
const playButton = document.querySelector('.playButton');
// Variabile di riferimento per richiamare il container della griglia
const gridContainer = document.getElementById('grid-container');



                // BONUS
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// variabile di riferimento per richiamare la select della difficoltà
const difficultySelect = document.querySelector('.difficulty');


// funzione per lo start del gioco al momento dell ascolto evento

// Aggiungi event listener al bottone di gioco per l'interazione utente
playButton.addEventListener('click', 
    function() {
        // creazione per richiamare il valore della selezione difficolta e trasformare il suo valore stringa in numero
        const difficultyLevel = parseInt(difficultySelect.value);

         // Chiamare la funzione definbita per generare la griglia di gioco del livello difficoltà
            generateGamegrid(difficultyLevel);
    }
);