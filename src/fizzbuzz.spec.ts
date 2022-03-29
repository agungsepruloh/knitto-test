import fizzbuzz from "./fizzbuzz";

test("FizzBuzz works", () => {
  expect(fizzbuzz(1)).toBe("1");
  expect(fizzbuzz(2)).toBe("2");
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(4)).toBe("4");
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(6)).toBe("Fizz");
  expect(fizzbuzz(7)).toBe("7");
  expect(fizzbuzz(8)).toBe("8");
  expect(fizzbuzz(9)).toBe("Fizz");
  expect(fizzbuzz(10)).toBe("Buzz");
  expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(30)).toBe("FizzBuzz");
});
