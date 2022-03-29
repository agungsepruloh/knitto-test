const fizzbuzz = (n: number): string => {
  const words: string[] = [];
  if (n % 3 === 0) words.push("Fizz");
  if (n % 5 === 0) words.push("Buzz");
  return words.join("") || n.toString();
};

export default fizzbuzz;
