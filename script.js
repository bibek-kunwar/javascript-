//js array

let book = ["math", "physics ", "Bio", "science"];
console.log(book[2])
console.log(book)
book.push("hiostory")
console.log(book.length)
console.log(book)
book.pop("Bio")
console.log(book)
let position = book.indexOf("Bio");
console.log(position);
console.log(Array.isArray(book))

let text = "this is a random text";
let wordarray = text.split(' ')
console.log(wordarray)
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(num)



let array1 = [1, 2, 3, 4, 5]
console.log(array1)
let array2 = [6.7, 8, 9, 10]
console.log(array2)

let Newarray = array1.concat(array2);
console.log(Newarray)
let array3 = [11, 12, 13, 14];
let array4 = array1.concat(array2, array3);
console.log(array4)


//array into array
let bookWithPages = [
  ["science", "100"],
  ["math", "200"],
  ["social", "300"]
];
console.log(bookWithPages)
let fetch = bookWithPages[1][0];
console.log(fetch)

let array4length = array4.length;





for (i = 0; i < array4length; i++){
  console.log(`Element ${i} is ${array4[i]}`)
}









