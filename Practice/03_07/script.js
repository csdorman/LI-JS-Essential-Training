/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const laptop = {
  name: "MacBook Pro 13' 2015",
  ram: 8,
  storage: 128,
  screen: 13,
  battery: 50,
  lidOpen: false,
  onBattery: false,
  inUse: function (inUse) {
    this.lidOpen = inUse
    this.onBattery = inUse
  }
}

const hornCase = {
  brand: "Wiseman Detachable Bell Case",
  containsHorn: true,
  contents: {
    horn: "Paxman 75M",
    mutes: {
      mute1: "Balu Straight",
      mute2: "Balu Practice",
    },
    mouthpieces: {
      mp1: "H1 cup",
      mp2: "SF cup",
      mp3: "H3 cup"
    },
    accessories: {
      mouthpiecePouch: true,
      pencil: true,
      oilPouch: true,
    }
  },
  lidOpen: true,
  handles: 2,
  strapLength: {
    left: 20,
    right: 20,
  }
}

console.log(laptop)

laptop.inUse(true)
console.log(laptop)
console.log(hornCase.contents)