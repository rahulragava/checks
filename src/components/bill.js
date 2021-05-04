
 import LineItem from "./lineItems"
function Bill(data) {
    const { lineItems }=data;
    
    //console.log(lineItems);

    return (
      <div >
        
                
        <table >
          
          <thead>
            <tr>  
              <th>item name</th>
              <th>units</th>
              <th>price</th>
              <th>discount</th>
              <th>tax</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {
              lineItems.map((lineItem,index)=>{

                return(
                  LineItem(lineItem,index)
                );

              
              })
            }
          </tbody>
        </table>
         
         
        

        <div>
            { data.total }
        </div>
          
            
       
      </div>
    );
  }
  export default Bill;