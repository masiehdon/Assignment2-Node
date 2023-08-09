# Assignment 2

This assignment aims to recreate and improve a codebase while fulfilling specific requirements. The code should be written in Node.js and utilize npm packages. The requirements include:

1. Recreate the code/steps from the presentation and make improvements.
2. Integrate a date library of your choice from npm. Avoid using Moment.js, as it is deprecated. Explore newer libraries for better alternatives.
3. Implement a function that writes the current date and time to a file when the script is run.
4. Add a function that calculates and writes the duration since the start of the course.
5. Allow the script to accept a date as an argument and write it to a file.
6. Create a function that determines if the provided date is before or after the current date.
7. Ensure that all dates and times are formatted in a clear and understandable manner.
8. Generate an HTML file (index.html) alongside the index.md file. The HTML file should include relevant markup, styling, and the required dates/info.

## Required Functions

1. `displayDate()`: Displays the current date and writes it to a file called "current-date.txt".
2. `calculateDurationSinceCourseStart()`: Calculates and displays the duration since the start of the course.
3. `differenceInputNow(now, userDate)`: Determines if the user-provided date is in the future or in the past.
4. `writeToFile(data, filename)`: Writes the provided data to a file with the given filename.

Usage
Run the application:

Follow the prompts to input a date and view the calculated information.

Check the generated files in the project directory:

current-date-time.txt - Contains the current date and time.
course-duration.txt - Contains the duration since the start of the course.
user-date.txt - Contains the provided user date.
index.html - HTML report with date information.