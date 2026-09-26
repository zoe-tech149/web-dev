# ATM Withdrawal

## Overview 

A simple ATM withdrwal program that checks whether a requested withdrawal can be processed based on the user's input, withdrawal limit, and available balance.

This project focuses on using JavaScript conditional logic to represent real-world decision-making.

## Features

The program :
01. Accepts a withdrawal amount from the user
02. Validates the entered amount
03. Checks the ATM withdrawal limit
04. Checks available account balance
05. Display an appropriate result

## Rules

* Assume the account currently has:
  **Available balance: R5,000**

* Maximum withdrawal limit : R2,000 per transaction
* Withdrawal amount must be greater than 0
* Withdrawal must not exceed the available balance

The program handles:

|Condition                                |Result                     |
|-----------------------------------------|---------------------------|
|No amount entered                        |Enter withdrawal amount    |
|Amount is 0 or negative                  |Enter a valid amount       |
|Amount is greater than R2,000            |Maximum withdrawal is R2000|
|Amount is greater than available balance |Insufficient funds         |
|Amount satisfies all rules               |Withdrawal approved        |

## Test Cases

|Input                                    |Expected Result                     |
|-----------------------------------------|---------------------------|
|Empty                                    |Enter withdrawal amount    |
|0                                        |Enter a valid amount       |
|500                                      |Withdrawal approved        |
|7,000                                    |Insufficient funds         |
|2,001                                    |Maximum withdrawal is R2000|

## Technologies

- HTML
- CSS
- JavaScript

## How to Run

1. Clone or download this repository
2. Open the `03-atm-withdrawal` folder
3. Open `index.html` in a web browser

# Demo