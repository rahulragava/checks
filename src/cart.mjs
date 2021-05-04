import data from "./data.mjs"

const {  Purchases, UnitPrices, Discounts, Taxes  } = data ;

var getDiscountPercent = function (productName) {
  var discount = Discounts[productName];
  
  if (discount) {
      return discount / 100;
    } else {
      return 0;
  }
};
  
var getTaxPercent = function (productName) {
  var tax = Taxes[productName];
  
    if (tax) {
      return tax / 100;
    }
    else {
      return 0;
    }
};
  
  var getItemDetails = function (itemName) {
    var unitPrice = UnitPrices[itemName];
    var discountPercent = getDiscountPercent(itemName);
    var itemDiscount = unitPrice * discountPercent;
    var discountedPrice = unitPrice - itemDiscount;
    var taxPercent = getTaxPercent(itemName);
    var tax = discountedPrice * taxPercent;
    var finalPrice = discountedPrice + tax;
  
    return {itemDiscount,tax,finalPrice};
  };
  
  var getLineItemDetails = function (lineItem) {
    var itemName = lineItem['item'];
    var units = lineItem['units'];
    var itemDetails = getItemDetails(itemName);
    var itemPrice=itemDetails.finalPrice;
    var lineItemPrice = itemPrice * units;
  
    return {itemName,units,lineItemPrice,...itemDetails};
  };
  
  var getSum = function (lineItems) {
    var i = 0;
    var sum = 0;
  
    while (i < lineItems.length) {
      var lineItem = lineItems[i];
     // var lineItemPrice = getLineItemDetails(lineItem);
     
      sum = sum + lineItem.finalPrice;
      i = i + 1;
    }
  
    return sum;
  };
  var getBill=function(){
     var lineItems=Purchases.map(getLineItemDetails);
      var total=getSum(lineItems);
      
    return {
      lineItems  ,
      total ,
    };
  
  }
  /*
 getBill();
  
  console.log(getBill()); */

export default getBill;


//console.log(lists[0].product);