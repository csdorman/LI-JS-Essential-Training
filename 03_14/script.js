/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js"

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

// console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since acquired:", everydayPack.backpackAge());
console.log("The everydayPack object:", everydayPack);


const artOfFrenchHorn = new Book(
  "Art of French Horn Playing",
  "Phillip Farkas",
  100,
  "French Horn",
  true,
  "December 17, 1995 03:24:00",
  "January 31 2022 11:58:08"
)

console.log(artOfFrenchHorn)
console.log(artOfFrenchHorn.timeToRead)