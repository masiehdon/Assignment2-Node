const fs = require("fs");
const moment = require('moment');
const chalk = require('chalk');

// Display current date
const displayDate = function () {
  const today = moment().format("YYYY-MM-DD");
  console.log(chalk.red(today));
};

displayDate();

const startDate = moment("2023-01-25", "YYYY-MM-DD"); // Updated start date

// Take date as user input and calculate the difference in days
const userDate = process.argv[2]; // Read the date from command-line argument
const now = moment();

const differenceInputNow = function (now, userDate) {
  userDate = moment(userDate, 'YYYY-MM-DD');
  now = moment(now, 'YYYY-MM-DD');
  if (userDate.diff(now, 'days') > 0) {
    console.log(chalk.green(`This date is in the future.`));
  } else {
    console.log(chalk.green(`This date was ${now.diff(userDate, 'days')} days ago.`));
  }
};

if (userDate) {
  differenceInputNow(now, userDate);
} else {
  console.log(chalk.red("Please provide a date as an argument."));
}

// Function to calculate and display the duration since the course start
const durationSinceCourseStart = function () {
  const duration = moment.duration(moment().diff(startDate));
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  
  console.log(chalk.green(`It has been ${years} years, ${months} months, and ${days} days since you started the course.`));
};

durationSinceCourseStart();
