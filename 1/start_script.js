document.addEventListener('DOMContentLoaded', () => {
    // erforderliche Elemente aus dem DOM werden abgerufen
    const brett = document.getElementById('brett');
    const zelle = document.querySelectorAll('.zelle');
    const status = document.getElementById('status');
    const neustartButton = document.getElementById('neustartButton');
  
    // aktueller Spieler und Ausgangszustand des Spiels werden angezeigt
    let aktuellerSpieler = 'X';
    let spielbrett = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    // mögliche Gewinnzüge sind hier aufgelistet
    const checkWinner = () => {
      const Gewinnzüge = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (const Muster of Gewinnzüge) {
        const [a, b, c] = Muster;
        if (spielbrett[a] && spielbrett[a] === spielbrett[b] && spielbrett[a] === spielbrett[c]) {
          return spielbrett[a];
        }
      }
  
      if (!spielbrett.includes('')) {
        return 'U'; // Unentschieden wird angezeigt
      }
  
      return null; // noch kein Gewinner
    };
  
    // das Brett ist voll
    const istbrettvoll = () => !spielbrett.includes('');
  
    // zufällige Schritte werden ermittelt
    const bestMove = () => {
      // die Wahrscheinlichkeit, den besten Zug zu wählen (hier: 70 %)
      const bestMoveProbability = 0.7;
  
      // Zufallswert kleiner → bester Zug wird gewählt
      if (Math.random() < bestMoveProbability) {
        const leerezelle = spielbrett.reduce((acc, zelle, index) => {
          if (zelle === '') {
            acc.push(index);
          }
          return acc;
        }, []);
  
        // zufälliger bester Zug aus den leeren Zellen wird ausgewählt
        const randomIndex = Math.floor(Math.random() * leerezelle.length);
        return leerezelle[randomIndex];
      } else {
        // Zufallswert größer → Zufallsgang
        const leerezelle = spielbrett.reduce((acc, zelle, index) => {
          if (zelle === '') {
            acc.push(index);
          }
          return acc;
        }, []);
  
        // Einen zufälligen Zug aus einer leeren Zelle auswählen
        const randomIndex = Math.floor(Math.random() * leerezelle.length);
        return leerezelle[randomIndex];
      }
    };
  
        // wenn auf einer Zelle geklickt wird
         const handleClick = (index) => {
         if (!spielbrett[index] && gameActive) {
        spielbrett[index] = aktuellerSpieler;
        zelle[index].textContent = aktuellerSpieler;
  
        const winner = checkWinner();
        if (winner) {
          // Spiel endet, Ergebnisse werden angezeigt
          gameActive = false;
          if (winner === 'U') {
            status.textContent = "Unentschieden!";
          } else {
            status.textContent = `${winner} Gewinner!`;
          }
        } else if (istbrettvoll()) {
          /// Spiel steht unentschieden, Ergebnis wird angezeigt
          gameActive = false;
          status.textContent = "Unentschieden!";
        } else {
        
            // Wechseln Sie den Zug des Spielers und setzen Sie das Spiel fort
              aktuellerSpieler = aktuellerSpieler === 'X' ? 'O' : 'X';
          status.textContent = `Spieler ${aktuellerSpieler}`;
  
          // Wenn der Computer am Zug ist, bestimmen Sie einen zufälligen Zug
          if (aktuellerSpieler === 'O') {
            const computerMove = bestMove();
            setTimeout(() => {
                handleClick(computerMove);
              }, 500); // Verzögerung, um ein reaktionsfähiges Gefühl zu vermitteln
          }
        }
      }
    };
  
    // das Spiel wird hier zurückgesetzt
    const restartGame = () => {
      spielbrett = ['', '', '', '', '', '', '', '', ''];
      gameActive = true;
      aktuellerSpieler = 'X';
      status.textContent = `Spieler ${aktuellerSpieler}`;
      zelle.forEach(zelle => {
        zelle.textContent = '';
      });
  
      // zufälliger Zug vom Computer
      if (aktuellerSpieler === 'O') {
        const computerMove = bestMove();
        setTimeout(() => {
            handleClick(computerMove);
          }, 500); // Verzögerung, um ein reaktionsfähiges Gefühl zu vermitteln
      }
    };
  
    // Ereignis-Listener für jede Zelle auf der Tafel hinzufügen
    zelle.forEach((zelle, index) => {
      zelle.addEventListener('click', () => handleClick(index));
    });
  
    // Einen Ereignis-Listener für die Schaltfläche „Neustart“ hinzufügen
    neustartButton.addEventListener('click', restartGame);
  });
  