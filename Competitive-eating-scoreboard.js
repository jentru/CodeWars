//Description
// You are the judge at a competitive eating competition and you need to choose a winner!

// There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

// Chickenwings: 5 points

// Hamburgers: 3 points

// Hotdogs: 2 points

// Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

// [
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ]
// It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

// [
//   {name: "Big Bob", score: 134},
//   {name: "Habanero Hillary", score: 98}
// ]
// Happy judging!

function scoreboard(whoAteWhat){
    function score(p){
      this.score = p.chickenwings*5+p.hamburgers*3+p.hotdogs*2
      return {name:p.name, score:this.score}
    }
  return whoAteWhat.map(participant=> score(participant)).sort(function (a,b) {
    if(a.name < b.name){
      return -1
    }
    if (a.name > b.name){
      return 1;
    }
    return 0
    }).sort((a,b)=> b.score-a.score)
}