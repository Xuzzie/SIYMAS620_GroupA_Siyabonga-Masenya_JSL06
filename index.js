// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
//All the stuff below will be going into the menu part of the the website
function displayMenuItems(menu) {
  // Get the menu container element from the HTML
  const menuContainer = document.getElementById("menu");

  // Loop through each category and its items in the menu object
  for (let category in menu) {
    // Create an element to represent the category
    const categoryElement = document.createElement("h2");
    // Set the text content of the category element to the category name
    categoryElement.textContent = category; //  What this will do is that each category highlighted in the  in the  the menu "object " will be converterd into text for the HTML

    // Append the category element to the menu container
    menuContainer.appendChild(categoryElement);
    // Create an element to represent a list of items
    const ItemList = document.createElement("ul"); //this will create space in which an unorderd list can exist
    // Append a list of items element to the menu container
    menuContainer.appendChild(ItemList);

    // Loop through the items in the category and create list items
    menu[category].forEach((itemName) => {
      // Create a list item element
      const listItem = document.createElement("li");
      // Set the text content of the list item element to the item name
      listItem.textContent = itemName;
      // Attach a click event listener to the list item to add it to the order
      listItem.addEventListener("click", () => addToOrder(itemName)); //I needed external help on the syntax and meaning for this line of code ,
      // Append the list item to the list of items
      ItemList.appendChild(listItem);
    });
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  // Get the order items list and the order total element from the HTML
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  // Create a list item for the order
  const orderItem = document.createElement("li");
  // Set the text content of the list item to the item name
  orderItem.textContent = itemName;
  // Append the list item to the order items list
  orderItemsList.appendChild(orderItem);
  // Calculate and update the total price
  const itemPrice = 10.0; //used chatgpt to help me with this section of content since it was a bit new to me
  let currentTotal = parseFloat(orderTotalElement.textContent);
  currentTotal += itemPrice;
  // Update the text content of the order total element with the new total
  orderTotalElement.textContent = currentTotal.toFixed(2); // to fixed affect the decimal points
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
