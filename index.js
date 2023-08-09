const fs = require("fs");
const { format, differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, isBefore, isAfter, isEqual, startOfDay } = require("date-fns");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to write data to a file
const writeToFile = function (data, filename) {
  fs.writeFileSync(filename, data);
  console.log(`Data written to ${filename} successfully.`);
};

// Function to calculate and write the current date and time
const writeCurrentDateTime = function () {
  const currentDateTime = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  writeToFile(currentDateTime, "current-date-time.txt");
};

writeCurrentDateTime();

// Function to calculate and write the duration since the start of the course
const writeCourseDuration = function () {
  const startDate = new Date("2023-01-25");
  const currentDate = new Date();
  const years = differenceInCalendarYears(currentDate, startDate);
  const months = differenceInCalendarMonths(currentDate, startDate) % 12;
  const days = differenceInCalendarDays(currentDate, startDate) % 30; // Adjust this value if necessary

  const durationString = `${years} years, ${months} months, and ${days} days`;
  writeToFile(durationString, "course-duration.txt");
};

writeCourseDuration();

// Function to determine if provided date is before or after the current date
const compareDates = function (userDate) {
  const currentDate = new Date();
  userDate = new Date(userDate);

  if (isEqual(startOfDay(userDate), startOfDay(currentDate))) {
    console.log(`The provided date is the same as the current date.`);
  } else if (isBefore(startOfDay(userDate), startOfDay(currentDate))) {
    console.log(`The provided date (${format(userDate, "yyyy-MM-dd")}) is before the current date.`);
  } else if (isAfter(startOfDay(userDate), startOfDay(currentDate))) {
    console.log(`The provided date (${format(userDate, "yyyy-MM-dd")}) is after the current date.`);
  } else {
    console.log(`Invalid date.`);
  }
};

rl.question("Enter a date (YYYY-MM-DD): ", (userDate) => {
  if (userDate) {
    compareDates(userDate);
  } else {
    console.log("Please provide a date.");
  }

  rl.close();
});

// Generate and write HTML file
const generateHTMLFile = function () {
  const startDate = new Date("2023-01-25");
  const currentDate = new Date();
  const courseDuration = differenceInCalendarDays(currentDate, startDate);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Date Management</title>
        <style>
          /* Add relevant CSS styling here */
        </style>
      </head>
      <body>
        <h1>Date Management</h1>
        <p>Current Date and Time: ${format(currentDate, "yyyy-MM-dd HH:mm:ss")}</p>
        <p>Course Duration: ${courseDuration} days</p>
      </body>
    </html>
  `;

  writeToFile(htmlContent, "index.html");
};

generateHTMLFile();
