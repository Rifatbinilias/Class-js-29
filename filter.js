
//এইটা দিয়ে কোন সংখ্য 20 এর বড় গুলো দেখাবে না হলে দেখাবে না।
/* const numbers = [56, 28, 19, 75, 47, 12, 13, 55];
const bigNumber = numbers.filter(number => number > 20);
console.log(bigNumber); */


// এ্ইটা হলো যে আমরা যে কোন তথ্য এইখান থেকে বের করতে পারবো।
/* const product = [
    { name: "T-Shirt", price: 4512, color: 'yellow' },
    { name: "brager", price: 4512, color: 'black' },
    { name: "Shongara", price: 12, color: 'yellow' },
    { name: "alu clop", price: 5, color: 'White' },
]

const lowPriceItems = product.filter(item => item.price < 100);
console.log(lowPriceItems); */

//এইটা হলো 19 সংখ্যাটাকে খুজে বের করতে হবে। প্রথম যেটা মিলবে সেটা দেখাবে। বাকিগুলা দেখাবে না।
/* const myNumbers = [56, 28, 19, 75, 47, 19, 13, 59];
const findNumber = myNumbers.find(Number => Number == 19);
console.log(findNumber); */

//forEach কখনো return করতে পারে না যার কারণে ভিন্নভাবে লেখতে হয়। 
/* const yourNumbers = [56, 28, 19, 75, 47, 19, 13, 59];
const rifatChoise = yourNumbers.forEach(yourNumber => console.log(yourNumber));
 */