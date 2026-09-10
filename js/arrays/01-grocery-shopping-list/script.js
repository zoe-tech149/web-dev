// Store the grocery items in an array
const groceryList = ["Milk", "Bread", "Eggs"];

// Find the position of the grocery item we want to remove
const groceryIndex = groceryList.indexOf("Bread");

// Check whether the grocery items was found
if (groceryIndex !== -1) {
  // Remove one grocery item from the position that was found
  groceryList.splice(groceryIndex, 1);
}

// Display the updated grocery list
console.log(groceryList);

