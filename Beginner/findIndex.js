const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal);
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

//Calling function startsWithS to test the program
console.log(startsWithS);