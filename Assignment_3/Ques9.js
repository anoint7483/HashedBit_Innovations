// Count number of words in paragraph

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("This is a paragraph with some words."));  // Output: 7
