function Phone(brand, price, color,size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + "the price is " + this.price + "and the size is"+ this.size + ".");
};

var iPhone6S = new Phone("Apple", 2250, "silver", 5);
var samsungGalaxyS6 = new Phone("Samsung", 3000, "black", 6.5);
var onePlusOne = new Phone("One plus One", 1500, "white", 5.2);

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
