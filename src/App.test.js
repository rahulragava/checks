import list from "./data.mjs"
const { items }=lists;
var itemPrice=function()
{
   
   price=price+(unitPrice*units);
   var amount=getDiscount(items.discount,price);
   var itemRate=getTax(items.tax,amount);
   return itemRate; 

}
var getDiscount=function(discount)
{
  if (discount===undefined)
  {
    return 0;
  }
  else
  {
    var getPercent= discount/100;
    var discountAmount=discount*price;
    var amount=price-discountAmount;
    return amount;
  }
  
}

var getTax=function(tax)
{
  if (tax===undefined)
  {
    return 0;
  }
  else
  var getpercent= tax/100;
  var taxAmount =tax*amount;
  var rate  =taxAmount+amount;
  return rate ;
}

var price=0;
items.map(itemPrice);

