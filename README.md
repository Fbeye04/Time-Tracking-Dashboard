# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Repository](https://github.com/Fbeye04/Time-Tracking-Dashboard)
- Live Site URL: [Live site](https://fbeye04.github.io/Time-Tracking-Dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1. Using Data Attributes

Using the data-timeframe attribute to store timeframe information on each button
Data attributes provide a more semantic way to store custom data on HTML elements
Making it easier to retrieve data values ​​using JavaScript with getAttribute()
Implementation example:
<button data-timeframe="daily" aria-pressed="true">Daily</button>

2. Asynchronous JavaScript

Implementing async/await functions to handle asynchronous operations
Understanding the concept of Promise and asynchronous data handling
Avoiding blocking on the user interface when fetching data
Usage example:
const fetchData = async () => {
try {
const response = await fetch("data.json");
const data = await response.json();
// Proses data
} catch (error) {
// Tangani error
}
};

3. Fetch API and Data Handling

Using Fetch API to fetch data from external files
Processing response data to JSON format
Handling errors when data fetch fails
Understanding the concept of Promise chaining in fetch requests

4. Using JSON for Data Management

Storing and managing activity data in JSON format
Understanding JSON data structures and how to access them
Organizing complex data with a structured format
Example of data structure:
{
"title": "Work",
"timeframes": {
"daily": {
"current": 5,
"previous": 7
},
"weekly": {
"current": 32,
"previous": 36
}
}
}

5. DOM Manipulation

Dynamically creating HTML elements using JavaScript
Adding and removing classes for styling and animation
Updating content based on user interaction
Using event listeners to handle interactions

6. Responsive Design

Layout implementation Responsive using CSS Grid and Flexbox
Using media queries to adjust the display to different screen sizes
Applying a mobile-first approach to styling

## Author

- LinkedIn - [Muhammad Fachrezi Barus](https://www.linkedin.com/in/muhammad-fachrezi-barus/)
- Frontend Mentor - [@Fbeye04](https://www.frontendmentor.io/profile/Fbeye04)
- GitHub - [@Fbeye04](https://github.com/Fbeye04)
