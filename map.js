// Map
/* const numbers = [5, 8, 9, 7, 4, 1, 2, 3, 5];
for (const number of numbers) {
    console.log(number);
}
 */


//এইটা হলো প্রত্যকটা অক্ষটাকে 2 দিয়ে গুণ করে দেখাবে।
/* const numbers = [5, 8, 9, 7, 4, 1, 2, 3, 5];

const doubleIt = number => number * 2;

const output = numbers.map(doubleIt)
console.log(output); */

// এইটা দিয়ে কোন সংখ্যা যদি ডাবল থাকে সেগুলোকে খুজে বের করা।
/* const numbers = [5, 8, 9, 7, 4, 1, 2, 3, 5];
numbers.map(number => console.log(number)) */


// এইটা হলো কোন একটা তথ্য লেখলাম তারপর সেটাকে কিভাবে দেখবো
/* const product = [
    { name: "T-Shirt", price: 4512, color: 'yellow' },
    { name: "brager", price: 4512, color: 'black' },
    { name: "Shongara", price: 4512, color: 'yellow' },
    { name: "alu clop", price: 4512, color: 'White' },
]

const productName = product.map(product => console.log(product)) */

// এইটা হলো কোন একটা তথ্য লেখলাম তারপর সেটাকে কিভাবে দেখবো তার মধ্যে আবার শুধূ একটা তথ্য দেখা যায় product.name
/* const product = [
    { name: "T-Shirt", price: 4512, color: 'yellow' },
    { name: "brager", price: 4512, color: 'black' },
    { name: "Shongara", price: 4512, color: 'yellow' },
    { name: "alu clop", price: 4512, color: 'White' },
]

const productName = product.map(product => console.log(product.name))
 */

