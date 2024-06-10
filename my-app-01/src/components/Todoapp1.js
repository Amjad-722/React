import React ,{useState} from "react";

const Todoapp1 = () => {
const [count , setCount] = useState (0);

return(

  <div>
    <h2>clicked {count}</h2>
    <button onClick = {() =>  setCount (count + 1 )}>  click</button>
  </div>
);

};

export default Todoapp1;