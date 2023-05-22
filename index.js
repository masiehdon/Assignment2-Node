const fs = require("fs");
const MarkdownIt = require('markdown-it');
const marked = require('marked');
const moment = require('moment');
const argParse = require('argparse');

// Display date

const displayDate = function () {
  const today = moment().format("YYYY-MM-DD");
   console.log(today)
};

displayDate();


startDate = moment("2023-01-21", "YYYY-MM-DD");
endDate = moment("2023-10-21", "YYYY-MM-DD");

const differenceInDays = function (startDate, endDate) {
  const daysDifference = endDate.diff(startDate, "days");
  if (daysDifference <= 0) {
    return `You started the course ${Math.abs(
      daysDifference
    )} days ago.`;
  } else {
    return "This date is in the future.";
  }
};

const daysSinceCourseStart = differenceInDays(startDate, endDate);
console.log(daysSinceCourseStart);

 // Take date as user input and calculate the difference in days

const userDate = process.argv[2];
const now = moment();

const differenceInputNow = function (now, userDate) {
  userDate = moment(userDate, 'YYYY-MM-DD');
  now = moment(now, 'YYYY-MM-DD');
  if (userDate.diff(now, 'days') > 0) {
    console.log(`This date is in the future.`);
  } else {
    console.log(`This date was ${now.diff(userDate, 'days')} days ago.`);
  }
};

differenceInputNow(now, userDate);



 function createHtmlFile(filename) {
const htmlContent = `
<!DOCTYPE html>
<html>
<head>.js
<link rel="stylesheet" href="index.css">
	<title>Assignment 2- Node.js</title>
    
</head>
<body>
<h1>HTML in Node.js</h1>
	<p>This is my first HTML file created in Node.js.</p>
    <p> ${daysSinceCourseStart}</p>
</body>
</html>
`

fs.writeFile(`${filename}.html`, htmlContent, (err)=> {
    if (err) throw err;
  console.log(`Its done! ${filename}.html is created!`);
})}

createHtmlFile(`index`)
  

///////////////////////////////////////////
function generateIndexMarkdown() {
  const markdownContent = `
# My Index Page

Welcome to my index page! This is some sample content.

## Section 1

This is the first section of my index page.

## Section 2

This is the second section of my index page.
`;

  fs.writeFile("index.md", markdownContent, (err) => {
    if (err) throw err;
    console.log("index.md file created");
  });
}

generateIndexMarkdown();