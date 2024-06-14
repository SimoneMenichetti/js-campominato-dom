// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.


// Variabile di riferimento per richiamare il button play
const playButton = document.querySelector('.playButton');
// Variabile di riferimento per richiamare il container della griglia
const gridContainer = document.getElementById('grid-container');


// funzione per lo start del gioco al momento dell ascolto evento

// Aggiungi event listener al bottone di gioco per l'interazione utente
playButton.addEventListener('click', 
    function() {

        // Mostra la griglia rimuovendo la classe hidden al play del button
        gridContainer.classList.remove('hidden'); 

        // refresh per  la griglia se  già è stata generata cliccando play 
        gridContainer.innerHTML = '';

        // Chiama la funzione per generare le celle
        generateCells(gridContainer);
    }
);