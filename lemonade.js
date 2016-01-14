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
	return temp.join(' | ');
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

function checkIfCanBuy (basket, base) {
	while ( base - basket < 0 ){
		console.log("Can't afford THIS. Remove some items.");
		return false;
}	if ( base - basket > 0 ) {
		console.log("Purchase Successful. You CAN afford.");
		return true;
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
	console.log("Today's Temp is "+day);
	return day;
}

function timesWeather (temperature) {
	var salesVar;
		if (temperature < 50) {
		 	salesVar = 0;
		} else if (temperature >= 50 && temperature < 60) {
			salesVar = .5;

		} else if (temperature >= 60 && temperature < 70) {
			salesVar = .7;

		} else if (temperature >= 70 && temperature < 80) {
			salesVar = .8;

		} else if (temperature >= 80 && temperature < 90) {
			salesVar = .85;

		} else if (temperature >= 90) {
			salesVar = 1;
		}
		return salesVar;
}

function setCupPrice () {
	var ask;
	ask = prompt("How much to charge per cup?");
	return ask;
}

function getDemandMultiplier (cupPrice){
	var perfect;
	var over;
	var under;
	var silly;
	var a;
	var b;
	var c;
	var d;
	perfect = .50;
	over = .60;
	under = .40;
	silly = .70;
	a = 1;
	b = .8;
	c = .9;
	d = 0;
	if (cupPrice == perfect || cupPrice < under) {
		return a;
	} else if (cupPrice > perfect && cupPrice <= over) {
		return b;
	} else if (cupPrice < perfect && cupPrice >= under) {
		return c;
	} else if (cupPrice >= silly) {
		console.log("You didn't sell anything because your prices are too high!")
		return d;
	}
}

function makeHowManyCups (currentTotalC, currentTotalS, currentTotalI, currentTotalL) {
	if (currentTotalC < currentTotalS && currentTotalC < currentTotalI && currentTotalC < currentTotalL){
		console.log("Made "+currentTotalC+" cups of lemonade!");
	} else if (currentTotalS < currentTotalC && currentTotalS < currentTotalI && currentTotalS < currentTotalL) {
		console.log("Made "+currentTotalS+" cups of lemonade!");
	} else	if (currentTotalI < currentTotalC && currentTotalI < currentTotalS && currentTotalI < currentTotalL) {
		console.log("Made "+currentTotalI+" cups of lemonade!");
	} else {
		console.log("Made "+currentTotalL+" cups of lemonade!");
	}
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
	var cupPrice;
	var currentWallet;
	var cupsMade;

	currentTotalC = 0;
	currentTotalS = 0;
	currentTotalI = 0;
	currentTotalL = 0;
	base = 30.00.toFixed(2);
	day = 0;
	currentWallet = 30.00.toFixed(2);

	temperature = getWeather(temp);
	forecast = displayInput("weatherField", temperature);
	// cupPrice ="";

	tempVar = timesWeather();
	
	cupCost = calcPriceOfMaterials ().regCups;
	sugarCost = calcPriceOfMaterials ().regSugar;
	iceCost = calcPriceOfMaterials ().regIce;
	lemonCost = calcPriceOfMaterials ().regLemon;

	limitC = calcRequestedAmt().cupLimit;
	limitS = calcRequestedAmt().sugarLimit;
	limitI = calcRequestedAmt().iceLimit;
	limitL = calcRequestedAmt().lemonLimit;

	console.log("Start Game");

start.onclick=function () {
	var dayTemp;
	var demand;
	if (currentTotalC === 0 || currentTotalS === 0 ||currentTotalI === 0 ||currentTotalL === 0) {
		alert("Need more Ingredients!");
	} else {
	cupPrice = setCupPrice(); //user input price of cup
	dayTemp = weather(temp, day);
	tempVar = timesWeather(dayTemp);
	demand = getDemandMultiplier(cupPrice);
	base = grandTotal;
	currentWallet = grandTotal;
	console.log("Temp Variable "+tempVar);
	console.log(demand+" Demand");
	// d++;
}
}
	buy.onclick=function () {
		amtOfC = getAmount("cup");
		amtOfS = getAmount("sugar");
		amtOfI = getAmount("ice");
		amtOfL = getAmount("lemon");

		wholesaleC = setPrice(amtOfC, limitC, cupCost);
		wholesaleS = setPrice(amtOfS, limitS, sugarCost);
		wholesaleI = setPrice(amtOfI, limitI, iceCost);
		wholesaleL = setPrice(amtOfL, limitL, lemonCost);
		
		howManyC = calcBuy(amtOfC, wholesaleC);
		howManyS = calcBuy(amtOfS, wholesaleS);
		howManyI = calcBuy(amtOfI, wholesaleI);
		howManyL = calcBuy(amtOfL, wholesaleL);
		
		basket = checkTotal(howManyC, howManyS, howManyI, howManyL);
		decide = checkIfCanBuy(basket, base);
				
		console.log(decide+" basket dollars");

	if (decide == false) {
		alert("You can't afford all of that!");
		alert(decide);
		return;
	} else {
		totalCup = tallyFirst(amtOfC);
		totalSugar = tallyFirst(amtOfS);
		totalIce = tallyFirst(amtOfI);
		totalLemon = tallyFirst(amtOfL);

		currentTotalC = storeInventory(currentTotalC, amtOfC);
		currentTotalS = storeInventory(currentTotalS, amtOfS);
		currentTotalI = storeInventory(currentTotalI, amtOfI);
		currentTotalL = storeInventory(currentTotalL, amtOfL);
		currentWallet = storeInventory(Number(currentWallet), Number(-basket));

		grandTotal = minusCostFromBasePrice(base, basket).toFixed(2);

		displayC = displayInput("cupcup", currentTotalC);
		displayS = displayInput("sugarsugar", currentTotalS);
		displayI = displayInput("iceice", currentTotalI);
		displayL = displayInput("lemonlemon", currentTotalL);
		displayBase = displayInput("base", currentWallet.toFixed(2));

		cupsMade = makeHowManyCups(currentTotalC, currentTotalS, currentTotalI, currentTotalL);

		console.log(base);
		console.log(currentWallet);
		console.log("Cost * Amt "+howManyC.toFixed(2));
		console.log("Cost * Amt "+howManyS.toFixed(2));
		console.log("Cost * Amt "+howManyI.toFixed(2));
		console.log("Cost * Amt "+howManyL.toFixed(2));

		console.log(totalSugar);
		console.log(currentTotalS);
		console.log(wholesaleS);
		console.log(howManyS);
		
		console.log(base+" base $");
		console.log(basket+" what i want to buy");
		console.log(grandTotal+" Supposed to be GrandTotal");

}
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