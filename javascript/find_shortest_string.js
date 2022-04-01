function findShortestString(arr) {
  let shortest = arr[0];
  arr.forEach((word) => {
    if (word.length < shortest.length) {
      shortest = word;
    }
  });
  return shortest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log('=>', findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log('');

  console.log("Expecting: 'hi'");
  console.log('=>', findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log('');

  console.log("Expecting: 'lily'");
  console.log(
    '=>',
    findShortestString(['flower', 'juniper', 'lily', 'dadelion'])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// shortest word = arr[0]
// for word in arr:
// if word shorter than shortest word:
// shortest word = word
// return shortest word

// And a written explanation of your solution

// Iterate over the array and compare each word to the current shortest word.
