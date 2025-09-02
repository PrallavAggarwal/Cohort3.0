/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


/*
const transactions = [{Transaction1}, {Transaction2}, .....];
transactions[0].price;
 */ 

// const transactions = [
//   {
//   id:1,
//   timestamp:12345678,
//   price:10,
//   category:'Food',
//   itemName:'Pizza'
//   },
//   {
//     id:2,
//     timestamp:23456789,
//     price:20,
//     category:'Food',
//     itemName:'Burger',
//   },
//   {
//     id:3,
//     timestamp:3456789,
//     price:30,
//     category:'Electronics',
//     itemName:'Mobile',
//   },
//   {
//     id:4,
//     timestamp:4567890,
//     price:40,
//     category:'Clothing',
//     itemName:'Shirt',
//   },
//   {
//     id:5,
//     timestamp:123489732687,
//     price:67,
//     category:'Electronics',
//     itemName:'Headphone',
//   }
// ]


function calculateTotalSpentByCategory(transactions) {
  const categories={};
  if(transactions.length === 0) return [];
  transactions.forEach(transaction => {
    if(!categories[transaction.category]){
      categories[transaction.category] = 0;
    }
    categories[transaction.category] += transaction.price;
  }); 
  return Object.keys(categories).map( category => 
    ({
    category:category,
    totalSpent:categories[category],
    })
  );
}


// console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;








