const fs = require("fs");
const moment = require("moment");
const { ArgumentParser } = require("argparse");

// Create the argument parser
const parser = new ArgumentParser();
parser.add_argument("userDate", { help: "Specify a date (YYYY-MM-DD)" });
const args = parser.parse_args();

// Display current date
const displayDate = async function () {
  const chalk = await import('chalk');
  const today = moment().format("YYYY-MM-DD");
  console.log(chalk.default.red(today)); // Update chalk usage to chalk.default.red
  writeToFile(today, "current-date.txt");
};

// Function to write data to a file
const writeToFile = function (data, filename) {
  fs.writeFile(filename, data, function (err) {
    if (err) {
      console.log(`Error writing to file: ${err}`);
    } else {
      console.log(`Data written to ${filename} successfully.`);
    }
  });
};

displayDate();

const startDate = moment("2023-01-25", "YYYY-MM-DD"); // Updated start date

// Take date as user input and calculate the difference in days
const userDate = args.userDate; // Use parsed userDate argument
const now = moment();

const differenceInputNow = function (now, userDate) {
  userDate = moment(userDate, 'YYYY-MM-DD');
  now = moment(now, 'YYYY-MM-DD');
  if (userDate.diff(now, 'days') > 0) {
    console.log(`This date is in the future.`);
  } else {
    console.log(`This date was ${now.diff(userDate, 'days')} days ago.`);
  }
  writeToFile(userDate.format("YYYY-MM-DD"), "user-date.txt");
};

if (userDate) {
  differenceInputNow(now, userDate);
} else {
  console.log("Please provide a date as an argument.");
}

// Function to calculate and display the duration since the course start
const durationSinceCourseStart = function () {
  const duration = moment.duration(moment().diff(startDate));
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  
  console.log(`It has been ${years} years, ${months} months, and ${days} days since you started the course.`);
  const durationString = `${years} years, ${months} months, and ${days} days`;
  writeToFile(durationString, "course-duration.txt");
};

durationSinceCourseStart();

// Function to generate and write HTML file
const generateHTMLFile = function () {
  const currentDate = moment().format("YYYY-MM-DD");
  const courseDuration = moment().diff(startDate, 'days');
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
        <p>Current Date: ${currentDate}</p>
        <p>Course Duration: ${courseDuration} days</p>
      </body>
    </html>
  `;
  writeToFile(htmlContent, "index.html");
};

generateHTMLFile();
