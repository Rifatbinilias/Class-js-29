
// Support টা হলো যে কোন কিছু লেখলাম এবং সেটাকে আবার constructor লেখে Support এর মধ্যে যেটা লেখছি সেটাকে constructor ওর মধ্যে কল করে দেবো। this.name = name; এইভাবে এবং নিচে আবার আমরা যদি চাই কোন টার মধ্যে কোন কিছু চেঞ্জ করতে পারবো। const rifat = new Support('Rifat Bin Ilias', 'Saltha', 12345678910); এভাবে হবে। 
class Support {
    name;
    desingnamtion = 'Support Web dev';
    addres = 'Bangladesh';
    phone = 1712475585;
    constructor(name, addres, phone) {
        this.name = name;
        // this.addres = addres;
        this.phone = phone;
    }
}

const rifat = new Support('Rifat Bin Ilias', 'Saltha', 12345678910);
const biddut = new Support();
console.log(biddut);

//inheritance in java শিখতে হবে। 