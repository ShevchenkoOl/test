const listCategory = document.querySelector('li');
console.log (listCategory);


/*function test(a){
  sentence = a.toLowerCase();
  word = sentence.split(' ');
  wordUpper = word.forEach(elements => elements.toUpperCase());
  //result = sentence + word + wordUpper;
  
   return wordUpper;
   
  
}
//console.log(test);   /*function test(a,b){
                             /*test = a + b;
                            return test;
                      }*/
/*console.log(test (`возвращает значение строки, на которой он был вызван, преобразованное в нижний регистр.`)); //SSSSSSSS GGGGGG GHYHGYYHH
//console.log(`ssssssss GGGGGG gHYhGyyHH`.toLowerCase());  //ssssssss gggggg ghyhgyyhh
//console.log(test (13,8)); //21
//console.log(test());      // Nan
//console.log()            // пусто
//console.log(5,8);          // 5,8
//console.log (`Add blue`);    // Add blue
//console.log (test(`Add blue`)); //Add blueundefined
//console.log (`red`, `blue`);   // red blue
//console.log (test (`red`, `blue`)); //redblue
//console.log (test(15)); // Nan
//console.log(test (13,8)); //21
//console.log(test());      // Nan
//console.log()            // пусто
//console.log(5,8);          // 5,8
//console.log (`Add blue`);    // Add blue
//console.log (test(`Add blue`)); //Add blueundefined
//console.log (`red`, `blue`);   // red blue
//console.log (test (`red`, `blue`)); //redblue
//console.log (test(15)); // Nan


/*function includes(array, value) {
  for (let elments of array){
    if (elments === value){
      return true;
    }
  }
    return false;
  }
  console.log(includes([1, 2, 3, 4, 5], 3));
  console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));*/



 /* function checkStorage(available, ordered) {
    let message;
     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  
   return message;
  }
console.log(checkStorage(78, 76));*/

/*function normalizeInput(input) {
    const normalizedInput = (input.toLowerCase());
    return normalizedInput;
  }
console.log(NodeIterator("nnnnnbbRTTTTYYYYHHGFFF"));  */
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  

  const ownerName = apartment.owner.name;
  console.log(ownerName);
  const ownerPhone = apartment.owner.phone;
  console.log(ownerPhone);
  const ownerEmail = apartment.owner.email;
  console.log(ownerEmail);  
  const numberOfTags = apartment.tags.length;
  console.log(numberOfTags);
  const firstTag = apartment.tags[0];
  console.log(firstTag);
  const lastTag = apartment.tags[apartment.tags.length-1];
  console.log(lastTag);*/


  /*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  const aptRating = apartment["rating"];
  console.log(aptRating);
  const aptDescr = apartment["descr"];
  console.log(aptDescr);
  const aptPrice = apartment["price"];
  console.log(aptPrice);
  const aptTags = apartment["tags"];
  console.log(aptTags);*/

  /*const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = ["descr", "rating", "price"];
  const values = ["Spacious apartment in the city center", 4, 2153];
  // Change code below this line
  for (const keys in apartment);
  for (const value in apartment);
  console.log (apartment[rating]);
  console.log (values);*/


  /*const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
    
  for (const color of colors){
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  }
  console.log(hexColors);
  console.log(rgbColors);


  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    
    let totalPrice = null;
    for (const product of products){
      if (productName === product.name) {
        totalPrice = product.price;
  return totalPrice;
    }}
      return totalPrice;
    
  }
  console.log (getProductPrice("Radar"));
  console.log (getProductPrice("Grip"));
  console.log (getProductPrice("Scanner"));
  console.log (getProductPrice("Droid"));
  console.log (getProductPrice("Enginer"));*/

 /* const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    
  let amount = 0;
  for (const product of products){
    if (product.name === productName){
      amount = product.price * product.quantity;
      return amount;
    }
  }
    return amount;   
  }
  console.log (calculateTotalPrice("Blaster"));
  console.log (calculateTotalPrice("Radar"));

  function add(...args) {
    let sum = 0;
    for (const arg of args) {
      sum += arg
    }
    return sum;
  }
  console.log (add(12, 4, 11, 48));
  console.log (add(12, 4, 11, 48, 11458, 1452, 25));
  console.log (add(12, 4, 11, 48, 25, 45, 7854, 7874, 8796654, 54, 15));

  function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = makePizza;
  
console.log (result);
console.log (pointer);*/

/*function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  
   calculateTotalPrice.forEach(function(orderedItems, index) {
    totalPrice += orderedItems.length[index];}) 

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));*/

/*function filterArray(numbers, value) 

{
  const filteredNumbers = [];
  
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

    return filteredNumbers;
}*/

/*const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
// Change code below this line

//const totalAveragePlaytimePerGame = players.reduce((previousValue, player) => {
  return midleTime = players.playtime / players.gamesPlayed;
  //return previousValue + midleTime;
//}, 0);
console.log(players);*/
