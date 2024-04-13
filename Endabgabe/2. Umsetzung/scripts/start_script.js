document.addEventListener('DOMContentLoaded', () => {
    // erforderliche Elemente aus dem DOM werden abgerufen
    const zelle = document.querySelectorAll('.zelle'); // alle Zellen auf dem Spielfeld
    const status = document.getElementById('status'); // Anzeige für den Spielstatus
    const neustartButton = document.getElementById('neustartButton'); // Button zum Neustarten des Spiels

    // aktueller Spieler und Ausgangszustand des Spiels werden angezeigt
    let aktuellerSpieler = 'X'; // der Spieler X beginnt hier das Spiel
    let spielbrett = ['', '', '', '', '', '', '', '', '']; // am Anfang wird hier das leere Spielfeld angezeigt
    let gameActive = true; // hier wird angezeigt, dass das Spiel aktiv ist und man kann dann anfangen zu spielen

    // mögliche Gewinnzüge sind hier aufgelistet (die Zellen sind con links nach rechts geordnet)
    const CheckGewinner = () => {
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

        // hier wird überprüft, ob einer der Gewinnzüge erreicht wurde, dabei wird für jede mögliche Gewinnkombination die Werte der Zellen in den Positionen a, b und c abgeglichen
        for (const Muster of Gewinnzüge) {
            const [a, b, c] = Muster;
            // hier wird überprüft, ob die Zellen an den Positionen a, b und c auf dem Spielfeld den gleichen Spieler enthalten und nicht leer sind
            if (spielbrett[a] && spielbrett[a] === spielbrett[b] && spielbrett[a] === spielbrett[c]) {
                // wenn dies zutrifft, bedeutet es, dass ein Spieler gewonnen hat
                // der Spieler, der in der Zelle an der Position a steht, wird als Gewinner erkannt und dann auch angezeigt
                return spielbrett[a]; // der Gewinner wird angezeigt
            }
        }

        // wenn das Spielfeld voll ist und keine der Gewinnmöglichkeiten zutrifft, wird Unentschieden (= U) angezeigt 
        if (!spielbrett.includes('')) {
            return 'U'; // Unentschieden wird angezeigt
        }
    };

    // hier wird der beste Zug für den Computer bestimmt
    const vollesBrett = () => !spielbrett.includes('');

    const besterZug = () => {
        // die Wahrscheinlichkeit, den besten Zug zu wählen liegt hier bei 70 %)
        const besteZugWahrscheinlichkeit = 0.7;
        // wenn der Zufallswert kleiner als die bestMoveProbability ist, wird der beste Zug gewählt
        const leereZellen = spielbrett.reduce((akk, zelle, index) => { // für jede Zelle wird überprüft, ob sie leer ist (''= leere Zelle)
            if (zelle === '') { // wenn die Zelle leer ist, wird der Index dieser Zelle dem akkumulierten Array hinzugefügt
                akk.push(index);
            }
            return akk; // das aktualisierte akkumulierte Array wird dann angegeben
        }, []);

        // hier wird überprüft, ob die zufällige Zahl kleiner als die besteZugWahrscheinlichkeit ist
        if (Math.random() < besteZugWahrscheinlichkeit) {
            // wenn ja, wird zufällig eine leere Zelle ausgewählt
            return leereZellen[Math.floor(Math.random() * leereZellen.length)];
        } else {
            // wenn nein, wird trotzdem zufällig eine leere Zelle ausgewählt (beide if-else-Statements sind identisch)
            return leereZellen[Math.floor(Math.random() * leereZellen.length)];
        }
    };

    const handleClick = (index) => {
        // hier wird überprüft, ob die Zelle bereits belegt ist und das Spiel aktiv ist
        if (!spielbrett[index] && gameActive) {
            // der aktuelle Spieler wird an der angegebenen Position auf dem Spielbrett platziert
            spielbrett[index] = aktuellerSpieler;
            // das Symbol (X oder O) des aktuellen Spielers wird in der Zelle angezeigt
            zelle[index].textContent = aktuellerSpieler;

            const Gewinner = CheckGewinner();
            if (Gewinner) {
                // Spiel endet und wird deaktiviert, man kann auf keiner Zelle mehr drücken
                // das Ergebnis wird angezeigt also der Gewinner (entweder X oder O)
                gameActive = false;
                if (Gewinner === 'U') {
                    status.textContent = "Unentschieden!"; // im Status wird bei Unentschieden, Unentschieden angezeigt
                } else {
                    status.textContent = `Spieler ${Gewinner} ist der Gewinner!`; // wenn nicht Unentschieden angezeigt wird, wird im Status der Gewinner angezeigt
                }
            } else if (vollesBrett()) {
                // Spiel steht unentschieden, Ergebnis wird angezeigt, wenn das Brett voll ist und keine Gewinnkombination erfüllt wurde
                gameActive = false;
                status.textContent = "Unentschieden!"; // im Status wird Unentschieden angezeigt
            } else {
                // Wechsel zum anderen Spieler für den nächsten Zug
                aktuellerSpieler = aktuellerSpieler === 'X' ? 'O' : 'X';
                // in der Statusanzeige wird der nächste Spieler angezeigt
                status.textContent = `Spieler ${aktuellerSpieler}`; // im Status wird der aktueller Spieler angezeigt

                // wenn der nächste Spieler O ist, wird der Zug mit 500ms verzögert 
                if (aktuellerSpieler === 'O') {
                    const Computerzug = besterZug();
                    setTimeout(() => handleClick(Computerzug), 500);
                }
            }
        }
    };

    // das Spiel wird hier zurückgesetzt
    const Neustart = () => {
        spielbrett = ['', '', '', '', '', '', '', '', '']; // das Spielbrett wird zurückgesetzt
        gameActive = true; // das Spiel ist wieder aktiviert
        aktuellerSpieler = 'X'; // der Spieler X fängt wieder an
        status.textContent = `Spieler ${aktuellerSpieler}`;
        zelle.forEach(zelle => zelle.textContent = ''); // die Zellen werden hier geleert

        // wenn Spieler O dran ist, wird der beste zufällige Zug vom Computer gewählt
        if (aktuellerSpieler === 'O') {
            const Computerzug = besterZug();
            // der Zug wird mit 500ms verzögert
            setTimeout(() => handleClick(Computerzug), 500);
        }
    };

    // Event-Listener für jede Zelle auf dem Brett
    zelle.forEach((zelle, index) => {
        zelle.addEventListener('click', () => handleClick(index));
    });

    // Event-Listener für "Neustart"
    neustartButton.addEventListener('click', Neustart);
});