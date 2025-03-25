/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const caveChoice = readline.question("You find a cave. Do you 'enter' or 'continue' on the path? ");
    if (caveChoice === "enter" && hasSword) {
      console.log("Inside, you encounter a Dragon! But, you defend yourself with your sword!");
      const treasureChoice = readline.question("Behind the dragon's tail you notice a chest, do you 'open' it or 'leave' it?");
      if (treasureChoice === "open") {
        console.log("You open it to reaveal a secret treasure!");
      } else {
        console.log("You leave the chest behind and continue on your journey.");
      }
   
    } else if (caveChoice === "enter" && !hasSword) {
      console.log("Oh no! A Dragon attacks you inside the cave, and you have no weapon to defend yourself with! However luck is on your side and manage to barely escape!");
    } else {
      console.log("You are wise to continue on the path and reach a hidden temple.");
    }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const villageChoice = readline.question("Do you visit the 'market' or the 'tavern'? ");
  if (villageChoice === "market") {
    console.log("You purchase a map and a compass to help you on your journey.");
  } else if (villageChoice === "tavern") {
    console.log("You hear rumors of treasure hidden in the mountains!");
  } else {
    console.log("You decide to rest for the night at the village inn.");
  }
} else if (hasMap || hasCompass) {
  console.log("Despite your uncertainty, your map or compass helps you find a new path.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/