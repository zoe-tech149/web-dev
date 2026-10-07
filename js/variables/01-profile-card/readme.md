# Personal Profile Card

A simple personal profile card built with **HTML, CSS, and JavaScript**. The project demonstrates how JavaScript variables can store profile information and dynamically display that information in an HTML document.

## Features

* Displays a profile name, age, location, and specialization.
* Stores profile information in JavaScript variables.
* Uses the DOM to select HTML elements.
* Uses `textContent` to display JavaScript values on the webpage.
* Allows profile information to be changed from JavaScript without modifying the HTML structure.

## Technologies

* HTML5
* CSS3
* JavaScript

## Demo

![Profile Card](assets/profile-card.PNG)

## Key Concepts

### JavaScript Variables

Profile information is stored as named values in JavaScript:

```js
const profileName = "Zama";
const profileAge = 20;
const profileLocation = "Sydney";
const profileSpecialization = "Web development";
```

### DOM Selection

JavaScript selects the HTML elements that will display the information:

```js
const profileNameElement = document.querySelector("#profileName");
```

### `textContent`

The stored value is assigned to the selected element:

```js
profileNameElement.textContent = profileName;
```

This creates the data flow:

```text
JavaScript variable
        ↓
      value
        ↓
    textContent
        ↓
   HTML element
        ↓
 webpage output
```

## Learning Objective

The main objective of this project is to understand how **named data stored in JavaScript variables can be connected to HTML elements and displayed in a webpage**.

A simple test demonstrates this: changing a profile value in `script.js` changes the displayed information without changing the HTML structure.

## What I Practiced

* Declaring variables with `const`
* Working with identifiers and values
* Selecting DOM elements with `querySelector()`
* Updating element content with `textContent`
* Connecting JavaScript to HTML
* Separating webpage structure from dynamic data

## Testing

The project was tested by changing profile values in `script.js` and reloading the webpage.

Example:

```js
const profileName = "Zoe";
```

The displayed name updates accordingly while the HTML remains unchanged.
