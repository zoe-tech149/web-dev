// Store the grocery items in an array.
const groceryList = ["Milk", "Bread", "Eggs", "Apples"];

// Find the unordered list where grocery items will be displayed.
const groceryListElement = document.querySelector("#groceryList");

// Find the input element where the user types a grocery.
const groceryInput = document.querySelector("#groceryInput");

// Find the Add button.
const addButton = document.querySelector("#addButton");

// Display all grocery items from the array on the webpage.
function displayGroceries(groceryToShake = "") {
  // Remove the current list items before displaying the updated array.
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

    // Listen for a click on this grocery's Edit button.
    editButton.addEventListener("click", function () {
      // Hide the Edit button while the grocery is being edited.
      editButton.style.display = "none";

      // Create an input element for entering the updated grocery name.
      const editInput = document.createElement("input");

      // Set the input type to text.
      editInput.type = "text";

      // Put the current grocery name into the edit input.
      editInput.value = groceryList[index];

      // Create a button for saving the edited grocery.
      const saveButton = document.createElement("button");

      // Set the text displayed on the Save button.
      saveButton.textContent = "Save";

      // Listen for a click on the Save button.
      saveButton.addEventListener("click", function () {
        // Get the updated grocery name and remove surrounding whitespace.
        const updatedGrocery = editInput.value.trim();

        // Stop the function if the updated grocery name is empty.
        if (updatedGrocery === "") {
          return;
        }

        // Find another grocery that matches the updated name.
        const duplicateIndex = groceryList.findIndex(
          function (item, itemIndex) {
            // Ignore the grocery being edited and compare names case-insensitively.
            return (
              itemIndex !== index &&
              item.toLowerCase() === updatedGrocery.toLowerCase()
            );
          },
        );

        // Stop the function if another grocery already has the updated name.
        if (duplicateIndex !== -1) {
          // Display the list and shake the existing duplicate grocery.
          displayGroceries(updatedGrocery);

          // Stop the function because the new grocery name is already in use.
          return;
        }

        // Replace the grocery at the selected index with the updated value.
        groceryList[index] = updatedGrocery;

        // Display the updated grocery list on the webpage.
        displayGroceries();
      });

      // Add the edit input inside the list item.
      listItem.appendChild(editInput);

      // Add the Save button inside the list item.
      listItem.appendChild(saveButton);

      // Place the cursor inside the edit input.
      editInput.focus();
    });

    // Create a button for removing the grocery item.
    const removeButton = document.createElement("button");

    // Set the text displayed on the Remove button.
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

    // Add the Edit button inside the list item.
    listItem.appendChild(editButton);

    // Add the Remove button inside the list item.
    listItem.appendChild(removeButton);

    // Add the list item to the grocery list on the webpage.
    groceryListElement.appendChild(listItem);
  }
}

// Listen for a click on the Add button.
addButton.addEventListener("click", function () {
  // Get the current value inside the input and remove surrounding whitespace.
  const grocery = groceryInput.value.trim();

  // Stop the function if the user did not enter a grocery item.
  if (grocery === "") {
    return;
  }

  // Find a grocery with the same name without caring about capitalization.
  const groceryIndex = groceryList.findIndex(function (item) {
    // Compare the existing grocery and new grocery in lowercase.
    return item.toLowerCase() === grocery.toLowerCase();
  });

  // Stop the function if the grocery is already in the array.
  if (groceryIndex !== -1) {
    // Display the list and shake the existing duplicate grocery.
    displayGroceries(grocery);

    // Stop the function because the grocery is already in the list.
    return;
  }

  // Add the new grocery item to the end of the array.
  groceryList.push(grocery);

  // Display the updated grocery list on the webpage.
  displayGroceries();

  // Clear the input after successfully adding the grocery.
  groceryInput.value = "";
});

// Display the initial grocery list when the page loads.
displayGroceries();
