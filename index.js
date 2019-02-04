function dwarfRollCall(dwarves) { 
  return ("1. + ${dwarves[0]} 2+ ${dwarves[1]} 3. + ${dwarves[2]} 4.+ ${dwarves[3]}")
}

function summonCaptainPlanet(planeteerCalls){ for (var i=0; i<planeteerCalls.length; i++){
  planeteerCalls[i]=
  planeteerCalls[i].toUpperCase() + "!"
}
return planeteerCalls
}

function longPlaneteerCalls(words) { var word = false
  for(var i=0; i<words.length; i++)
  {if (words.length>4){
    return word= true
  }
    return word
  }
}

function findTheCheese (foods) { var cheese= ["cheddar", "gouda", "camembert"]
  for(var i=0; i<foods.length; i++)
  {if (cheese.includes(foods[i]))
{
  return foods[i]
}
}
return "no cheese!"
}
