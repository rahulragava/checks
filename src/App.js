

import getBill from './cart.mjs';

import Bill from "./components/bill"

function App() {
   const data=getBill();
  
  return (
    <div className="App">
             
      {Bill(data)}
      
    </div>
  );
}

export default App;
