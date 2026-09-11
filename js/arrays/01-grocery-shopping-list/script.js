// Store the grocery items in an array.
const groceryList = ["Milk", "Bread", "Eggs", "Apples"];

// Find the unordered list where grocery items will be displayed.
const groceryListElement = document.querySelector("#groceryList");

// Visit each grocery item in the array.
for (let index = 0; index < groceryList.length; index++) {
  // Create a new list item element.
  const listItem = document.createElement("li");

  // Put the current grocery name inside the list item.
  listItem.textContent = groceryList[index];

  // Add the list item to the grocery list on the webpage.
  groceryListElement.appendChild(listItem);
}
