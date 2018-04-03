var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [];

  let i = 0;
  while (1 < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];

  let i = 0;
  do {
    array.push("I love the Beatles!")
    number++;
  } while (15 > number);
  return array;
}
