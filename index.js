const fs = require("fs");
const MarkdownIt = require('markdown-it');
const marked = require('marked');
const moment = require('moment');
const argParse = require('argparse');

// Display date

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

 // Take date as user input and calculate the difference in days

const userDate = process.argv[2];

const date = moment(userDate);

const differenceInputNow = function(now, userDate){
  userDate = moment(userDate, 'YYYY-MM-DD');
  now = moment(now, 'YYYY-MM-DD');
  if(userDate.diff(now, 'days') <= 0){
    console.log(`The date lies in the future.`)
  }else{
    console.log(`This date was ${userDate.diff(now, 'days')} days ago.`);
  }

}

differenceInputNow(date, today)

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

createHtmlFile(`index`, `</p>`)
  

///////////////////////////////////////////
/*
const markdownContent = `# Hello, World!\n\nThis is some *Markdown* text.`;

function createMarkdownFile(filename, markdownContent) {

   htmlContent = marked(markdownContent);
const fileContent = `<!DOCTYPE html>
  <html>
    <head>
      <title>Markdown Content</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css">
    </head>
    <body class="markdown-body">
      Some markdown content
    </body>
  </html>`;
 
  fs.writeFile(`${filename}.html`, fileContent, (err) => {
    if (err) throw err;
    console.log(`${filename}.html file created`);
  });
}

createMarkdownFile('myFile', markdownContent); 
*/
