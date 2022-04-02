
/* CHANGE THE PHRASE WHERE DRAGONS ARE SLAYED */
let wordsDb = ["sharp wit", "slick aphorisms", "deadly witticisms", "punchy observations", "lethal barbs", "savage quips", "stinging gibes"]

let workingWords = Array.from(wordsDb);

function newWords() {
  let rWI = Math.floor(Math.random() * workingWords.length);
  let w = workingWords[rWI];
  workingWords.splice(rWI, 1);
  if (workingWords.length === 0) {
    workingWords = Array.from(wordsDb);
  };

  var elem = document.getElementById('clicky');
  elem.innerHTML = w.toString();
}

/* CHANGE THE EVENT FOR WHICH ANDREW WILL HELP WRITE JOKES FOR */

let eventsDb = ["your thanksgiving dinner monologue that no one will see coming but be highly impressed by", "a birthday card for your dad", "a roast set for that annoying co-worker", "your office christmas party", "your first date with your crush", "your exit interview", "that weekend cookout with your friends"]

let workingEvents = Array.from(eventsDb);

function newEvents() {
  let rEI = Math.floor(Math.random() * workingEvents.length);
  let e = workingEvents[rEI];
  workingEvents.splice(rEI, 1);
  if (workingEvents.length === 0) {
    workingEvents = Array.from(eventsDb);
  };

  var elem = document.getElementById('quicky');
  elem.innerHTML = e.toString();
}

