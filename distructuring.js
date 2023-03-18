// distructuring
// const book = { name: "Progaming Shikhi", id: 101, price: 500, color: "blue", };
// const price = book.price;
// const rong = book.color;
// console.log(rong);

//এইটা হলো object এর distructuring
/* const book = { name: "Progaming Shikhi", id: 101, price: 500, color: "blue", };
const { id, color, price, } = book;
console.log(color); */



//object এর মধ্যেvalue গুলোকে nextas object হবে দিলাম। এইটার মধ্যে আলাদা আলাদা করে object নিয়া যায়। নিচে দেখানো হলো: এবং সেটা কিভাবে তার তথ্যগুলোকে বের করতে হয় সেটাকেও দেখানো হলো। 
/* const company = {
    name: "web developere",
    ceo: {
        name: "Ali vaiya",
        id: 1,
        food: "Khaschi lover",
    },
    web: {
        work: "website devolopment",
        employee: 11,
        framework: "react",
        tech: {
            first: "gtml",
            secound: "Css",
            third: "taliwind",
            final: "js",
        }
    }
}
const jas = company.web.tech.final;
console.log(jas);
console.log(company.name); */

const company = {
    name: "web developere",
    ceo: {
        name: "Ali vaiya",
        id: 1,
        food: "Khaschi lover",
    },
    web: {
        work: "website devolopment",
        employee: 11,
        framework: "react",
        tech: {
            first: "gtml",
            secound: "Css",
            third: "taliwind",
            final: "js",
        }
    }
}
const tail = company.web.tech.third //? এই চিহ্নটাকে বলে offsonal Chainin. এইটা দিলে আমাদেরকে error বেশি দেখায় না এক লাইনে ভুল হলে সেটা দেখায় যেমন: ?tech . 
console.log(tail);