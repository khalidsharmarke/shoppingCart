const userName = prompt("What is your name?");
let itemOne = prompt("what is your first item?");
let itemOnePrice =  prompt("how much is it?");

if (itemOnePrice <= 0){
	alert("that is not a a valid price. please enter a valid price");
	itemOnePrice = prompt("how much is it?");
}
let itemTwo = prompt("what is your second item?");
let itemTwoPrice = prompt("how much is it?");
let itemThree = prompt("what is your third item?");
let itemThreePrice = prompt("how much is it?");

let subTotal = itemOnePrice + itemTwoPrice + itemThreePrice;

console.log(subTotal);

let total = subTotal * 1.0625;

alert(`${userName}, your grand total is ${total}`);

