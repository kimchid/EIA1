 const storyStart = "Willkommen zum 3. Prüfungsort! Du bist mit 2 anderen Anwärtern der Hunter-Prüfung im obersten Stocck eines Turms. Um den sogenannten Trick-Tower in 24h herabzusteigen, müsst ihre alle Entscheidung anonym durch die Mehrheit beschließen. Eure Entscheidung gibt Ihr bitte in das Gerät ein, welches vor euch liegt. Die erste Entscheidung beginnt damit, ob ihr die Tür öffnen wollt oder nicht. Mögliche Antworten: öffnen oder nicht öffnen";
 const storyRoom1 = "Ihr habt euch alle dazu entschlossen, die Tür zu öffen. Euer Teamgeist stärkt sich. Ihr betretet einen anderen Raum und müsst gegen einem Prüfer gegen eurer restlichen Zeit wetten. Mögliche Antworten: wetten oder nicht wetten";
 const storyRomm1wetten = "Ihr habt euch dazu entschlossen, zu wetten. Ihr verliert jedoch die Wette und besteht nicht die Hunter-Prüfung.";
 const StoryRoom1nichtwetten = "Die Mehrheit hat sich dafür entschieden, nicht zu wetten. Ihr gwinnt die Wette und dürft weiter zur nächsten Aufgabe gehen.";
 const WrongInput = "Wrong input. Game over.";
 
 const storyRoom2 = "Die Mehrheit hat sich dafür entschieden, die Tür zu öffen. Euer Teamgeist verschlechtert sich wegen der Uneinstimmigkeit. Ihr betretet einen anderen Raum und müsst gegen einem Prüfer gegen eurer restlichen Zeit wetten. Mögliche Antworten: wetten oder nicht wetten";
 const StoryRoom2wetten = "Ihr habt euch dazu entschlossen, zu wetten. Ihr verliert jedoch die Wette und besteht nicht die Hunter-Prüfung.";
 const StoryRoom2nichtwetten = "Die Mehrheit hat sich dafür entschieden, nicht zu wetten. Ihr gwinnt die Wette und dürft weiter zur nächsten Aufgabe gehen.";
 
 const start = prompt(storyStart);
 if (start == "öffnen") {
    const action = prompt(storyRoom1);
    if (action == "wetten") {
       alert(storyRomm1wetten);
    } else if (action == "nicht wetten") {
       alert(StoryRoom1nichtwetten);
    }
 }
 
 if (start == "nicht öffnen") {
    const action = prompt(storyRoom2);
    if (action == "wetten") {
       alert(StoryRoom2wetten);
    } else if (action == "nicht wetten") {
       alert(StoryRoom2nichtwetten);
    }
 }
 
 if (start != "öffnen" && start != "nicht öffnen") {
    alert(WrongInput);
 }
 
 
