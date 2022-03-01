/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

// Function Declaration
function newParagraph() {
  console.log("inside newParagraph")
  const lastPara = document.querySelector(".para2")
  const newText = document.createElement("p")
  newText.innerText = "This is a new paragraph after the previous ones."
  lastPara.append(newText)
}

// Call function declaration
newParagraph()

// Function expression

const newList = function() {
  console.log("inside newList")
  const firstPara = document.querySelector("p")
  const newList = document.createElement("ul")
  newList.innerHTML =
    `<li> The most important thing</li>
    <li> The last thing</li>`
  firstPara.prepend(newList)
}
newList()

// Arrow function
 let bob = () => {
  console.log("inside arrow")
  const firstUl = document.querySelector("ul")
  const newHeading = document.createElement("h2")
  newHeading.innerText = "Here is your list"
  firstUl.prepend(newHeading)
}
bob()