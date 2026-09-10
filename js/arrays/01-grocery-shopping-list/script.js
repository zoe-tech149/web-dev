// Store the grocery items in an array
const groceryList = ["Milk", "Bread", "Eggs", "Apples"];

// Find the position of the grocery item we want to remove
const groceryIndex = groceryList.indexOf("Bread");

// Check whether the grocery items was found
if (groceryIndex !== -1) {
  // Remove one grocery item from the position that was found
  groceryList.splice(groceryIndex, 1);
}

// Visit each element in the grocery list
for (let index = 0; index < groceryList.length; index++) {
  // Display the current grocery item
  console.log(groceryList[index]);
}
