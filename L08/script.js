stories = [
    "Ihr habt euch alle dazu entschlossen, die Tür zu öffen. Euer Teamgeist stärkt sich. Ihr betretet einen anderen Raum und müsst gegen einem Prüfer gegen eurer restlichen Zeit wetten. Mögliche Antworten: 'wetten' oder nicht 'wetten'",
    "Die Mehrheit hat sich dafür entschieden, die Tür zu öffen. Euer Teamgeist verschlechtert sich wegen der Uneinstimmigkeit. Ihr betretet einen anderen Raum und müsst gegen einem Prüfer gegen eurer restlichen Zeit wetten. Mögliche Antworten: 'wetten' oder 'nicht wetten'",
    "Ihr habt euch dazu entschlossen, zu wetten. Ihr verliert jedoch die Wette und besteht nicht die Hunter-Prüfung. Versuche es nächstes Jahr!",
    "Die Mehrheit hat sich dafür entschieden, nicht zu wetten. Glückwunsch! Ihr gewinnt die Wette und dürft weiter zur nächsten Aufgabe gehen.",
  ]

let state = 1;

const input = document.querySelector(".inputForm__field")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (input.value == "öffnen") {
            output.innerHTML = stories [0]
        } else if (input.value == "nicht öffnen") {
            output.innerHTML = stories[1]
        }
    }

})


input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
      if (input.value == "wetten") {
          output.innerHTML = stories [2]
      } else if (input.value == "nicht wetten") {
          output.innerHTML = stories[3]
      }
  }

})

