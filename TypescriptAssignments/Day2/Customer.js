var Customer = /** @class */ (function () {
    function Customer(id, name, city) {
        if (name === void 0) { name = ""; }
        if (city === void 0) { city = ""; }
        this.id = 0;
        this.name = "";
        this.city = "";
        this.id = id;
        this.name = name;
        this.city = city;
    }
    Customer.prototype.showDetails = function () {
        console.log("Customer Id : " + this.id);
        console.log("Customer Name : " + this.name);
        console.log("Customer City : " + this.name);
    };
    return Customer;
}());
var c1 = new Customer(46545);
var c2 = new Customer(46545, "Scott");
var c3 = new Customer(46545, "Scott", "Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
