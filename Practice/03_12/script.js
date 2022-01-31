/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Horn from "./Horn.js"
import Cat from "./Cat.js"
import Shirt from "./Shirt.js"
import Backpack from "./Backpack.js"

const paxman25 = new Horn(
  "Paxman 25M",
  "double",
  "yellow brass",
  true,
  true,
)

const paxman75 = new Horn(
  "Paxman 75M",
  "triple",
  "gold brass",
  true,
  true,
)

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
);

const veli = new Cat(
  "shorthair",
  "grey",
  "male",
  true,
  false
)

const tuxShirt = new Shirt(
  "small",
  "white",
  "long",
  "studs",
  true
)

console.log("As defined:", paxman25)
console.log("As defined:", paxman75)
console.log("As defined:", veli)
console.log("As defined:", everydayPack)
console.log("As defined:", tuxShirt)
paxman25.toggleInCase()
veli.toggleHungry()
tuxShirt.toggleClean()
console.log("After", paxman25)
console.log("After", veli)
console.log("After", tuxShirt)