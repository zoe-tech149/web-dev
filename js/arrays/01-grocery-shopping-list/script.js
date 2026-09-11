// Store the grocery items in an array.
const groceryList = ["Milk", "Bread", "Eggs", "Apples"];

// Find the unordered list where grocery items will be displayed.
const groceryListElement = document.querySelector("#groceryList");

// Find the input element where the user types a grocery
const groceryInput = document.querySelector("#groceryInput");

// Find the Add Buttton
const addButton = document.querySelector("#addButton");

// Display all grocery items from the array on the webpage.
function displayGroceries(groceryToShake = "") {
  // Remove the current list items before displaying the updated array
  groceryListElement.innerHTML = "";

  // Visit each grocery item in the array.
  for (let index = 0; index < groceryList.length; index++) {
    // Create a new list item element.
    const listItem = document.createElement("li");

    // Put the current grocery name inside the list item.
    listItem.textContent = groceryList[index];

    // Create a button for editing the grocery item.
    const editButton = document.createElement("button");

    // Set the text displayed on the edit button.
    editButton.textContent = "Edit";

    // Create a button for removing the grocery item.
    const removeButton = document.createElement("button");

    // Set the text displayed on the remove button.
    removeButton.textContent = "Remove";

    // Listen for a click on this grocery's Remove button.
    removeButton.addEventListener("click", function () {
      // Remove the grocery at this button's index.
      groceryList.splice(index, 1);

      // Display the updated grocery list.
      displayGroceries();
    });

    // Check whether this grocery should receive the shake animation.
    if (groceryList[index].toLowerCase() === groceryToShake.toLowerCase()) {
      // Add the shake class to the matching grocery item.
      listItem.classList.add("shake");
    }

    // Add the edit button inside the list item.
    listItem.appendChild(editButton);

    // Add the remove button inside the list item.
    listItem.appendChild(removeButton);

    // Add the list item to the grocery list on the webpage.
    groceryListElement.appendChild(listItem);
  }
}

// Listen for a cick on the Add Button
addButton.addEventListener("click", function () {
  // Get the current value inside the input element.
  const grocery = groceryInput.value.trim();

  // Stop the function if the user did not enter a grocery item
  if (grocery === "") {
    return;
  }

  // Find the index of a matching grocery without caring about capitalization.
  const groceryIndex = groceryList.findIndex(function (item) {
    // Compare the existing grocery and the new grocery in lowercase.
    return item.toLowerCase() === grocery.toLowerCase();
  });

  // Stop the function if the grocery is already in the array
  if (groceryIndex !== -1) {
    // Display the list and shake the grocery that already exists.
    displayGroceries(grocery);

    // Stop the function because the grocery is already in the list.
    return;
  }

  // Add the new grocery item to the end of the array
  groceryList.push(grocery);

  // Display the updated grocery list on the webpage.
  displayGroceries();

  // Clear the input after successfully adding the grocery
  groceryInput.value = "";
});

// Display the initial grocery list when the page loads.
displayGroceries();
