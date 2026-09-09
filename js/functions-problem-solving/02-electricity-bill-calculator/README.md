# Electricity Bill Calculator

A simple web application that calculates an electricity bill using a progressive tiered pricing model.

## Overview

The user enters their electricity consumption in kilowatt-hours (kWh), and the application calculates the bill by applying the appropriate tariff to each portion of the consumption.

The project was built to practice translating a real-world billing problem into structured JavaScript logic.

## Features

* Accepts electricity usage in kWh
* Validates empty input
* Rejects negative electricity usage
* Calculates electricity costs using three progressive tariff tiers
* Displays the electricity usage
* Displays the cost and usage for each tier
* Displays the final bill
* Supports mouse and keyboard interaction
* Clears previous results when the input changes

## Tariff Model

The calculator uses the following progressive tariff:

| Tier   | Electricity Usage |      Rate |
| ------ | ----------------: | --------: |
| Tier 1 |     First 100 kWh | R2.00/kWh |
| Tier 2 |      Next 200 kWh | R2.50/kWh |
| Tier 3 |     Remaining kWh | R3.00/kWh |

### Example

For a usage of **450 kWh**:

```text
Tier 1: 100 kWh × R2.00 = R200.00
Tier 2: 200 kWh × R2.50 = R500.00
Tier 3: 150 kWh × R3.00 = R450.00

Total: R1150.00
```

## Technologies

* HTML
* CSS
* JavaScript
* Git
* GitHub

## JavaScript Concepts Practiced

* Variables and constants
* Functions
* Parameters and arguments
* Return values
* Objects
* Object properties
* DOM manipulation
* Event listeners
* Keyboard events
* Input validation
* Conditional logic
* Arithmetic operations
* Template literals
* `Math.min()`
* Function composition
* Separation of responsibilities

## Function Responsibilities

The calculation logic is divided into focused functions.

### `calculateFirstTier(usage)`

Calculates the electricity assigned to Tier 1 and its cost.

### `calculateSecondTier(remainingUsage)`

Calculates the electricity assigned to Tier 2 from the remaining usage and determines its cost.

### `calculateThirdTier(remainingUsage)`

Calculates the cost of all electricity remaining after the first two tiers.

### `calculateBill(electricityUsed)`

Coordinates the three tier calculations and returns the complete billing information as an object.

## Data Flow

The billing process follows this sequence:

```text
Electricity usage
      ↓
Tier 1
      ↓
Remaining usage
      ↓
Tier 2
      ↓
Remaining usage
      ↓
Tier 3
      ↓
Total bill
```

Each tier returns both its `usage` and `cost`, allowing the next stage of the calculation to use the remaining electricity.

## Design Decisions

### Progressive billing

The calculator uses progressive tiers rather than applying one rate to the entire consumption amount.

For example, 250 kWh is calculated as:

```text
100 kWh × R2.00
150 kWh × R2.50
```

rather than charging all 250 kWh at the second-tier rate.

### `Math.min()`

`Math.min()` is used to ensure that a tier never receives more electricity than its defined maximum.

For example:

```javascript
Math.min(450, 100);
```

returns:

```text
100
```

This allows the program to enforce the maximum capacity of Tier 1.

### Returning objects

The tier functions return objects containing related information:

```javascript
{
    usage: 100,
    cost: 200
}
```

This allows the rest of the application to access both the electricity consumed and the associated cost.

## Validation

The application checks that:

* The user entered a value.
* Electricity usage is not negative.

Zero is accepted as a valid input.

## What I Learned

This project strengthened my understanding of breaking a larger problem into smaller functions with clear responsibilities.

I learned how individual functions can work together to solve a larger problem, how objects can carry related data between functions, and how business rules can be translated into JavaScript logic.

The project also reinforced the importance of testing edge cases rather than testing only the expected input.

## Challenges

One of the main challenges was determining how to pass information between tariff calculations.

Each tier needs both:

* the amount of electricity it consumed
* the cost of that electricity

Returning objects allowed the application to preserve that information and calculate the remaining usage for the next tier.

## Future Improvements

* Add more realistic tariff configurations
* Add South African electricity pricing data
* Add better validation feedback
* Improve accessibility
* Add responsive design improvements
* Add automated tests
* Add downloadable billing summaries

## Demo

![Electricity Bill Calculator](demo/screenshot.png)

![Electricity Bill Calculator](demo/demo.mp4)

## Project Structure

```text
02-electricity-bill-calculator/
├── index.html
├── style.css
├── script.js
├── README.md
└── demo/
    └── screenshot.png
```
