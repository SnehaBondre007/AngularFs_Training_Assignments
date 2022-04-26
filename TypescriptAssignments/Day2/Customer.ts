class Customer{
    private id:number = 0;
    private name:string  = "";
    private city:string  = "";

    constructor(id:number, name:string = "", city:string = "")
    {
        this.id = id;
        this.name = name;
        this.city = city;
    }
  
    public showDetails():void
    {
        console.log("Customer Id : " + this.id);
        console.log("Customer Name : " + this.name);
        console.log("Customer City : " + this.name);
        console.log("------------------------------------");
    }
}


let c1:Customer = new Customer(46545);
let c2:Customer = new Customer(46545, "Scott");
let c3:Customer = new Customer(46545, "Scott", "Hyd");


c1.showDetails();
c2.showDetails();
c3.showDetails();