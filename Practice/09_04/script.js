/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridCell = document.querySelectorAll(".cell")
const grid = document.querySelector(".grid")
const docBody = document.querySelector("body")

// This can be straightforward since it's the window
window.addEventListener("click", (e) => {
  console.log("Click event registered", e)
})

document.addEventListener("keydown", (e) => {
  console.log(e.code)
  if (e.code === "Space" && docBody.style.backgroundColor === "azure") {
    docBody.style.backgroundColor = "black"
  } else {
    docBody.style.backgroundColor = "azure"
  }
})

// Same thing here
grid.addEventListener("mouseenter", () => {
  grid.style.border = "red solid 5px"
})

grid.addEventListener("mouseleave", () => {
  grid.style.border ="none"
})

console.log(gridCell)

// Since this variable is an array, there's another step.
gridCell.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log("You clicked a cell!", e)
    if (e.target.style.backgroundColor !== "yellow") {
      e.target.style.backgroundColor = "yellow"
    } else {
      e.target.style.backgroundColor = "hsl(0, 0%, 90%)"
    }
  })
  e.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "purple"
    })
  e.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "hsl(0, 0%, 90%)"
  })
})

