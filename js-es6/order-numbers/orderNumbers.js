const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
  let evenNumbers = [];
  let oddNumbers = [];

  const mappedNumbers = array.map((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number)
    } else {
      oddNumbers.push(number)
    }
    return number
  });

  const result = [evenNumbers, oddNumbers];
  return result;
};

const [even, odd] = orderNumbers(randomNumbers);
console.log(even);
console.log(odd);
