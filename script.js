function Phone(brand, price, color) {
	this.brand = SamsungGalaxyS6;
	this.price = 2000;
	this.color = white;
	this.size = 6;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + "the price is " + this.price + "and the size is"+ this.size + ".");
};
samsungGalaxyS6.printInfo();

function Phone(brand, price, color) {
	this.brand = iPhone6S;
	this.price = 3000;
	this.color = silver;
	this.size = 5.5;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + "the price is " + this.price + "and the size is"+ this.size + ".");
};
iPhone6S.printInfo();

function Phone(brand, price, color) {
	this.brand = OnePlusOne;
	this.price = 1500;
	this.color = black;
	this.size = 5.2;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + "the price is " + this.price + "and the size is"+ this.size + ".");
};
OnePlusOne.printInfo();