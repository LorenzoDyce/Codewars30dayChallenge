/* you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

const squareDigits = num => {
  let array = [];
  array = String(num).split('');
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }
  return Number(array.join(''));
};
