/**
 * Challenge: Create an event listener
 * - Find the two elements with the .backpack__strap class.
 * - Create a function to output the strap length form.
 * - Iterate through each item with the .backpack__strap class.
 * - Capture the value of the data-side attribute to indicate the strap side.
 * - Create a form element.
 * - Populate the form with an input and a submit button.
 * - Add event listener to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  button.innerText == "Open lid"
    ? (button.innerText = "Close lid")
    : (button.innerText = "Open lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

// Add strap length functionality
const newStrapLength = (strapArray) => {
  console.log(strapArray)
  //Iterate through each strap side
  strapArray.forEach((element) => {
    console.log(element)
    let side = element.getAttribute("data-side")

    //Create form
    let strapForm = document.createElement("form")
    strapForm.classList.add(`${side}`)
    strapForm.innerHTML = `
    <input type="number" name="${side}Length" placeholder="New ${side} strap value"</input>
    <button>Update strap length</button>
    `
    //Add strapForm to doc
    element.append(strapForm)

    // Event listener
  })
}



const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  let button = backpackArticle.querySelector(".lid-toggle");
  let newArg = "The argument I want to pass to the callback function!";
  let strapLength = backpackArticle.querySelectorAll(".backpack__strap")
  newStrapLength(strapLength)

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });

  return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
