const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix

console.log(interestingWords.every((word) => {
  return word.length > 5;
} ));
