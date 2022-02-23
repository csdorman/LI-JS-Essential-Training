/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let deskItems = ["keyboard", "mouse", "charger", "coffee", "phone", "mic", "stand", "laptop"]

// Remove last item
deskItems.pop()

// Add last item as first
deskItems.unshift("laptop")

//Sort in alphabetical order
deskItems.sort()

// Find "mic"
item = deskItems.find(item => item.length < 4)
console.log(item)

// Find and remove "mic"
deskItems.forEach(function (item){
  if (item.length < 4) {
    let itemId = deskItems.indexOf(item)
    deskItems.splice(itemId, 1)
  }
})

console.log(deskItems)
