# Work Day Scheduler

## Overview

This repository contains a simple calendar application, the Work Day Scheduler, that allows users to manage their daily schedules effectively. The application runs in the browser and features dynamically updated HTML and CSS powered by jQuery. It utilizes the Day.js library to work with date and time.

## Demo

![Work Day Scheduler Demo](./Assets/05-third-party-apis-homework-demo.gif)

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript (jQuery for DOM manipulation)
- Day.js library for date and time handling

## Project Structure

- `index.html`: The main HTML file containing the structure of the application.
- `style.css`: The stylesheet file for styling the application.
- `script.js`: The JavaScript file for handling the logic of the Work Day Scheduler.

## How to Use

1. Open `index.html` in a web browser.
2. The current day is displayed at the top of the calendar.
3. Scroll down to view time blocks for each hour from 9 am to 5 pm.
4. Each time block is color-coded based on whether it is in the past, present, or future.
5. Click into a time block to enter an event.
6. Click the save button for a time block to save the event in local storage.
7. Refresh the page, and the saved events will persist.

## Code Explanation

- The application uses Day.js to handle date and time operations.
- The class of each time block is dynamically changed based on the current hour.
- User input for events is saved in local storage and retrieved upon page refresh.