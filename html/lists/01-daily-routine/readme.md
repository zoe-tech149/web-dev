# 01 — My Daily Routine

## Overview

A simple HTML page that represents a collection of daily activities using an unordered list.

## Problem

Create a webpage that displays daily activities where the order of the activities does not carry meaning.

## Requirements

* Create a valid HTML document.
* Add a page title and main heading: **My Daily Routine**.
* Display at least six daily activities.
* Represent the activities using an unordered list.
* Represent each activity as an individual list item.
* Use HTML only.

## Concepts

* HTML document structure
* `<ul>` — unordered list
* `<li>` — list item
* Semantic HTML
* Parent-child relationships in HTML

## Solution

The page uses `<ul>` to define the unordered list and `<li>` to represent each individual activity.

```html
<ul>
  <li>Wake up early</li>
  <li>Pray</li>
  <li>Deep work sessions</li>
  <li>Lunch</li>
  <li>Reading</li>
  <li>Dinner</li>
</ul>
```

## Key Learning

The browser can render text placed directly inside a `<ul>`, but proper list semantics require each item to be represented with `<li>`.

`<ul>` defines the type of collection, while `<li>` defines the individual items within it.

## Testing

Verified that:

* All six activities render correctly.
* Each activity appears as a separate list item.
* The browser generates the list markers automatically.
* No numbers or bullet characters were manually typed.
* The HTML structure is properly nested.

## Demo

**Screenshot:** 

![Daily Routine](assets/daily-routine.png)

`assets/screenshot.png`

## Status

✅ Completed
