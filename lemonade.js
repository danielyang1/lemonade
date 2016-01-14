"use strict";

function getAmount(id) {
    var price;
    price = document.getElementById(id).value;
    return price;
}

function getWeather(temp) {
	var days;
	days = 7;
	for(var i=0 ; i < days ; i++){
		temp.push(Math.floor((Math.random() * 18) + 18) + Math.floor((Math.random() * 18) + 18+ Math.floor((Math.random() * 18) + 18)));
}
	return temp;
}

function setStartingPrice (base) {
	base = 30.00;
	return base;
}

function checkTotal (howManyC, howManyS, howManyI, howManyL) {
	var total;
	total = howManyC+howManyS+howManyI+howManyL;
	return total;
}

function minusCostFromBasePrice (base, basket) {
	var grandTotal;
	grandTotal = base - basket;
	return grandTotal;
}

function setPrice (amt, qty, cost) {
	if (amt >= qty) {
		var discount;
		discount = .01;
		cost -= discount;
	}
		return cost;
}

function calcPriceOfMaterials () {
	var pricesR;
	pricesR = {
		regCups: .05,
		regSugar: .12,
		regIce: .05,
		regLemon: .08,
	}
	return pricesR;
}

function calcRequestedAmt () {
	var valueMax;
	valueMax = {
		cupLimit: 100,
		sugarLimit: 10,
		iceLimit: 100,
		lemonLimit: 125,
		};
	return valueMax;
}

function calcBuy (amt, cost) {
	var items;
	items = Number(amt) * Number(cost) /*wholesale*/
	return items;
}

function checkIfCanBuy (basket, base, amt) {
	if ( basket >= base ){
		console.log("Can't afford. Remove some items.");

	} else {
		minusCostFromBasePrice(base, basket);
		console.log("Purchase Successful. You CAN afford.");
	}
}
function displayInput (id, total) {
	document.getElementById(id).innerHTML= total;
}

function tallyFirst (amt) {
	var invenTotal;
	invenTotal = amt;
	return invenTotal;
}

function storeInventory (total, amt) {
	total = Number(total) + Number(amt);
	return Number(total);
}

function weather (temp, i) {
	var day;
	day = temp[i];
	console.log(day);
	return day;
}

function timesWeather (temperature) {
	var salesVar;
		if (temperature < 50) {
		 	salesVar = 0;
		} else if (temperature >= 50 && temperature < 60) {
			salesVar = 8;
		} else if (temperature >= 60 && temperature < 70) {
			salesVar = 32;
		} else if (temperature >= 70 && temperature < 80) {
			salesVar = 48;
		} else if (temperature >= 80 && temperature < 90) {
			salesVar = 64;
		} else if (temperature >= 90) {
			salesVar = 96;
		}
		return salesVar;
}

function setCupPrice () {
	var ask;
	ask = prompt("How much to charge per cup?");
	return ask;
}

function getDemandMulti () {
	if () {

	}
}

function calculateAll (temp, cupP) {

}

function addProfit (argument) {
	// body...
}

function addSevenDays (argument) {
	// body...
}


// function calcLemonade (amtOfC, amtOfL, amtOfI, amtOfS) {
// 	c = 1 or c=7.
// }

function main() {
	var temperature;
	var amtOfC;
	var amtOfS;
	var amtOfI;
	var amtOfL;
	var	base;
	var grandTotal;
	var inventoryTotal;
	var balance;
	var regCups;
	var regSugar;
	var regIce;
	var regLemon;
	var valueCups;
	var valueSugar;
	var valueIce;
	var valueLemon;
	var cupCost;
	var sugarCost;
	var lemonCost;
	var iceCost;
	var showInventory;
	var limitC;
	var limitS;
	var limitI;
	var limitL;
	var wholesaleC;
	var wholesaleS;
	var wholesaleI;
	var wholesaleL;
	var howManyC;
	var howManyS;
	var howManyI;
	var howManyL;
	var basket;
	var decide;
	var totalCup;
	var totalSugar;
	var totalIce;
	var totalLemon;
	var displayC;
	var displayS;
	var displayI;
	var displayL;
	var displayBase;
	var forecast;
	var tempVar;
	var currentTotalC;
	var currentTotalS;
	var currentTotalI;
	var currentTotalL;
	var day;
	var temp = [];

	currentTotalC = 0;
	currentTotalS = 0;
	currentTotalI = 0;
	currentTotalL = 0;
	day = 0;

	temperature = getWeather(temp);
	forecast = displayInput("weatherField", temperature);
	base = setStartingPrice(base);
	
start.onclick=function () {
	var dayTemp;
	var cupPrice;

	dayTemp = weather(temp, day);
	tempVar = timesWeather(dayTemp);
	cupPrice = setCupPrice();
	console.log(tempVar+" Temp Variable");

	
	// d++;
}

buy.onclick=function () {
	amtOfC = getAmount("cup");
	amtOfS = getAmount("sugar");
	amtOfI = getAmount("ice");
	amtOfL = getAmount("lemon");
	
	cupCost = calcPriceOfMaterials ().regCups;
	sugarCost = calcPriceOfMaterials ().regSugar;
	iceCost = calcPriceOfMaterials ().regIce;
	lemonCost = calcPriceOfMaterials ().regLemon;

	limitC = calcRequestedAmt().cupLimit;
	limitS = calcRequestedAmt().sugarLimit;
	limitI = calcRequestedAmt().iceLimit;
	limitL = calcRequestedAmt().lemonLimit;

	wholesaleC = setPrice(amtOfC, limitC, cupCost);
	wholesaleS = setPrice(amtOfS, limitS, sugarCost);
	wholesaleI = setPrice(amtOfI, limitI, iceCost);
	wholesaleL = setPrice(amtOfL, limitL, lemonCost);

	howManyC = calcBuy(amtOfC, wholesaleC);
	howManyS = calcBuy(amtOfS, wholesaleS);
	howManyI = calcBuy(amtOfI, wholesaleI);
	howManyL = calcBuy(amtOfL, wholesaleL);

	basket = checkTotal(howManyC, howManyS, howManyI, howManyL);
	grandTotal = minusCostFromBasePrice(base, basket).toFixed(2);
	decide = checkIfCanBuy(basket, base);


	totalCup = tallyFirst(amtOfC);
	totalSugar = tallyFirst(amtOfS);
	totalIce = tallyFirst(amtOfI);
	totalLemon = tallyFirst(amtOfL);
	
	base = grandTotal;
	displayBase = displayInput("base", base);
	
	tempVar = timesWeather();
	
	currentTotalC = storeInventory(currentTotalC, amtOfC);
	currentTotalS = storeInventory(currentTotalS, amtOfS);
	currentTotalI = storeInventory(currentTotalI, amtOfI);
	currentTotalL = storeInventory(currentTotalL, amtOfL);
	
	displayC = displayInput("cupcup", currentTotalC);
	displayS = displayInput("sugarsugar", currentTotalS);
	displayI = displayInput("iceice", currentTotalI);
	displayL = displayInput("lemonlemon", currentTotalL);

	// console.log("Inventory"+ (inventoryTotal = adjustInventory(amtOfL)));
	// console.log(showBalance(inventoryTotal, "cup", amtOfC));
	console.log(sugarCost);
	console.log(wholesaleC);
	console.log(howManyS);
	console.log(limitS, "Limit before Discount");
	console.log("Cost * Amt "+howManyC.toFixed(2));
	console.log("Cost * Amt "+howManyS.toFixed(2));
	console.log("Cost * Amt "+howManyI.toFixed(2));
	console.log("Cost * Amt "+howManyL.toFixed(2));
	console.log(base);
	console.log(basket+" what i want to buy");
	console.log(grandTotal+" Supposed to be GrandTotal");
}
}

main();


































//how to reach into Objects/ using Arrays
// function calcValuePrice () {
// 	var prices,abs, myArray, stuff;

// 	myArray = [
// 		prices = {
// 			regCups: .05,
// 			regSugar: .12,
// 			regIce: .05,
// 			regLemon: .30,
// 			valueCups: .04,
// 			valueSugar: .01,
// 			valueIce: .04,
// 			valueLemon: .15,
// 			},
// 		abs = {
// 			superman: 1
// 		},
// 		stuff = {
// 			ironman: "iron"
// 		}
// 	];
// 		return myArray;
// }

// console.log(calcValuePrice()[2].ironman);