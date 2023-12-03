
let Entscheidung = prompt("Willkommen zum 3. Prüfungsort! Du bist mit 2 anderen Anwärtern der Hunter-Prüfung im obersten Stocck eines Turm. Um den sogenannten Trick-Tower in 24h herabzusteigen, müsst ihre alle Entscheidung anonym durch die Mehrheit beschließen. Eure Entscheidung gibt Ihr bitte in das Gerät ein, welches vor euch liegt. Die erste Entscheidung beginnt damit, ob ihr die Tür öffnen wollt oder nicht. Mögliche Antworten: öffnen oder nicht öffnen")
console.log(Entscheidung)



if (Entscheidung == "öffnen"){
    Entscheidung = prompt("Ihr habt euch alle dazu entschlossen, die Tür zu öffen. Euer Teamgeist stärkt sich. Bitte weiter eingeben.")
} else if (Entscheidung == "nicht öffnen") {
    Entscheidung = prompt("Die Mehrheit hat sich dafür entschieden, die Tür zu öffen. Euer Teamgeist verschlechtert sich wegen der Uneinstimmigkeit. Bitte weiter eingeben.")
}




let Wette = prompt("Ihr betretet einen anderen Raum und müsst gegen einem Prüfer gegen eurer restlichen Zeit wetten. Mögliche Antworten: wetten oder nicht wetten")
console.log(Wette)


if (Wette == "wetten"){
    Wette = prompt("Ihr habt euch dazu entschlossen, zu wetten. Ihr verliert jedoch die Wette und besteht nicht die Hunter-Prüfung. Bitte Ende eingeben.")
} else if (Wette == "nicht wetten") {
    Wette = prompt("Die Mehrheit hat sich dafür entschieden, nicht zu wetten. Ihr gwinnt die Wette und dürft weiter zur nächsten Aufgabe gehen. Bitte weiter eingeben.")
}