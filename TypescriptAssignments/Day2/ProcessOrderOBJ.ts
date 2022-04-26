class ProcessOrderObj{
    private productId:number=1;
    private productName:string="";
    private unitPrice:number=0;
    private quantity:number=0;

    public get PId():number
    {
        return this.productId;
    }


    public get PName():string
    {
        return this.productName;
    }

    public set PName(value:string)
    {
        this.productName = value;
    }

    public get UPrice():number
    {
        return this.unitPrice;
    }

    public set UPrice(value:number)
    {
        this.unitPrice = value;
    }

    public get Qty():number
    {
        return this.quantity;
    }

    public set Qty(value:number)
    {
        this.quantity = value;
    }

    public initalPrice(unitPrice:number, quantity:number):number{
        return unitPrice*quantity;
    }

}
console.log("--------------------------------------");
let pObj:ProcessOrderObj = new ProcessOrderObj();

console.log("Product Id: "+pObj.PId);  // get

pObj.PName = "Scott"; //set
console.log("Product Name : " + pObj.PName);  // get

pObj.UPrice = 1000;
console.log("Product price : " + pObj.UPrice);  // get

pObj.Qty = 2;
console.log("Product quantity : "+pObj.Qty);

let totalPPrice = pObj.initalPrice(pObj.UPrice,pObj.Qty);

console.log("Total product price id : "+totalPPrice);
console.log("--------------------------------------");


