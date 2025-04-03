// Tutorials array
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to capitalize the first letter of each word in the string
function titleCased() {
  const exceptions = ["OO", "NaN", "JSONP", "API"]; // Updated list of exceptions to remain in uppercase

  return tutorials.map((tutorial) => {
    return tutorial
      .split(' ') // Split the tutorial into an array of words
      .map((word) => {
        // Check if the word is in the exceptions list
        if (exceptions.includes(word)) {
          return word.toUpperCase(); // Leave these words in uppercase
        }
        // Capitalize the first letter of the word and ensure the rest is lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ') // Join the words back into a string
      .replace("Web Api", "Web API") // Special case for "Web Api" to "Web API"
      .replace("NAN", "NaN") // Special case for "NAN" to "NaN"
      .replace("Stoppropagation", "StopPropagation") // Special case for "Stoppropagation"
      .replace("Preventdefault", "PreventDefault") // Special case for "Preventdefault"
      .replace("Jsonp", "JSONP"); // Special case for "Jsonp" to "JSONP"
  });
}

console.log(titleCased());
