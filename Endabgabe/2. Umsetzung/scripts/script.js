// "start.html" wird als nächste Seite geöffnet, wenn der ESP verbunden ist und daruafhin der physischer Button grdrückt wird
function handleTouch12() {
    window.location.href = "start.html";
}

// der "Start"-Button verschiebt sich beim versuchten Anklicken (Positon = zufällige x- und y-Koordinaten innerhalb des sichtbaren Bereichs des Bildschirms)
function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('button').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('button').offsetHeight);
    
    // der "Start"-Button wird auf zufälligen Koordinaten (x, y) gesetzt
    document.getElementById('button').style.right = `${x}px`;
    document.getElementById('button').style.top = `${y}px`;
}