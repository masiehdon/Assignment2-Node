const fs = require("fs");
const MarkdownIt = require('markdown-it')
const moment = require('moment');

// Dispaly date

const today = moment().format("YYYY-MM-DD");

const displayDate = function(){
   return today
};

console.log(displayDate());


startDate = today;
endDate = "2023-01-10"

 const differenceInDays = function(startDate, endDate){
   const start = moment(startDate, 'YYYY-MM-DD');
  const end = moment(endDate, 'YYYY-MM-DD');
  const daysDifference = end.diff(start, 'days');
if(daysDifference <= 0){
    return `You started the course ${Math.abs(daysDifference)} days ago`}
    else if(daysDifference > 0){
return `Let´s not talk about the future!`
    }
 }

 const daysSinceCourseStart = differenceInDays(startDate, endDate);

 function createHtmlFile(filename, bodyContent) {
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="index.css">
	<title>Assignment 2- Node.js</title>
    
</head>
<body>
<h1>HTML in Node.js</h1>
	<p>This is my first HTML file created in Node.js.</p>
    <p>when I asked the app when I started my course, I got this: ${daysSinceCourseStart}</p>
</body>
</html>
`

fs.writeFile(`${filename}.html`, htmlContent, (err)=> {
    if (err) throw err;
    console.log(`Its done! ${index}.html is created!`);
})}

createHtmlFile(`index`, `</p>`)

