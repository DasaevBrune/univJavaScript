let numbers = [1, 3, 5, 1, 2, 1, 3, 6, 9, 7, 5];
const hash = {};

numbers.forEach((digit) => {
  if (!hash.hasOwnProperty(digit)) hash[digit] = 1;
  else hash[digit] += 1;
});

for (const key in hash) {
  if (hash.hasOwnProperty(key) && hash[key] > 1) {
    hash.duplicates = hash.duplicates || {};
    hash.duplicates[key] = hash[key];
    delete hash[key];
  }
}

console.log(hash);
