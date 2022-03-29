import palindrome from "./palindrome";

test("Palindrome works", () => {
  expect(palindrome("racecar")).toBe(true);
  expect(palindrome("hello")).toBe(false);
  expect(palindrome("madam")).toBe(true);
  expect(palindrome("aaaaaa")).toBe(true);
  expect(palindrome("table")).toBe(false);
  expect(palindrome("")).toBe(true);
});
