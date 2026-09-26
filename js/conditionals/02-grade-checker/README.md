# Grade Tracker

Build a program that allows a user to enter a mark and determine their grade/result.

## Requirements

The program must:

01. Allow the user to enter a mark
02. Check whether a mark was entered
03. Determine the appropriate result based on the mark
04. Display the result on the web page
05. Handles marks at the boundaries correctly

## Rules

|Mark     | Result      |
|---------|-------------|
|80-100   | Distinction |
|50-79    | Pass        |
|0-49     | Fail        |

If no mark is entered:
  **Enter mark**

## How it works ?

                      Marks Entered
                       ↙        ↘
                     NO          YES
                     ↓             ↓
              "Enter mark"     What is the mark?
                                       |
                              --------------------
                              |        |         |
                             0-49    50-79     80-100
                               ↓       ↓         ↓
                             Fail     Pass    Distinction

## Grade Checker Tests

|Grade           |Expected output    | Output       |
|----------------|-------------------|--------------|
| empty          |  Enter mark       | Enter mark   |
| 0              |  Fail             | Fail         |
| 50             |  Pass             | Pass         |
| 79             |  Pass             | Pass         |
| 80             |  Distinction      | Distinction  |
| 100            |  Distinction      | Distinction  |

## Demo

<video controls src="grade-checker-demo.mp4" title="Title"></video>

