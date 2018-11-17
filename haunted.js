const READLINE = require("readline-sync");

let player = {
  name: undefined,
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  console.log(`${player.name} opens the door... and finds two doors`);
  let WoodMetal = READLINE.question("Will you go into the Wood or Metal? (Wood/Metal) ");
  if(WoodMetal= "Wood") {
    console.log(`${player.name} enters the room and looks at the broken furniture, you feel a drop of liquid fall on you, it came from above`);
  }
  let runStay= READLINE.question("RUN away as fast as you can or dare to look up! (Run/Stay)");
  if(runStay=="run") {
    console.log(`${player.name} knowing it was life or death runs out the room into the street. Lucky, you get to live. Congrats`);
  } 
  else { 
   console.log("You look up only to see a ravenous beast, it lunges at you ripping your head off for a snack. RIP you have died");
  }
}
if(enterHouse==="no") {
  console.log(`${player.name} decides not to open the door. However... A crowd of ambitious teenagers run inside with you forced along!`);
  console.log(`${player.name} falls on the floor as the crowd spills through two different but ominous doors and hears loud screams!`);

  let checkTeenagers = READLINE.question(" Will you check on the teenagers? (yes/no) ");
if(checkTeenagers=="yes") {
  console.log("You stand infront of the sercure looking MetalDoor");
}
else{
  console.log("You take out your phone to call the police, but realize its broken from the fall!!!");
  console.log("The WoodDoor creaks open and a bloody teenager falls in front of you!");
  console.log(`${player.name} ask the teeanger "What happened!"`);    console.log("The teenager responds 'run away, NOW before IT comes!'");
}
  let helpGo = READLINE.question("Will you Help the teen or Enter the MetalDoor! (Help/Enter) ");
if(helpGo=="help") {
  console.log("We are getting out of here both of us!");
}
else{
  console.log("As you went to open the MetalDoor, a deranged figure burst out of the wall slashing you to pieces! You have die on this scary night.");
}  
}
    
  
console.log("Thanks for playing!");