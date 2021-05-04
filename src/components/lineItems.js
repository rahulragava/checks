
function LineItem(lineItem,index) {
  
    
    return (
      
        
         
            
            
              <tr key ={index}> 
              
           <td>{ lineItem.itemName }</td> 
           <td>{ lineItem.units }</td>
           <td>{ lineItem.lineItemPrice }</td>
           <td>{ lineItem.itemDiscount }</td>
           <td>{ lineItem.tax }</td>
           <td>{ lineItem.finalPrice }</td>
           </tr>
           
          

          
            
       
      
    );
  }
  export default LineItem;