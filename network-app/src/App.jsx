import { useState } from 'react'
import './App.css'
import DataDisplay from "./components/DataDisplay";


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState (false);
  const [err, setErr] = useState(null);

 const fetchData = async () =>{
  setIsLoading(true);
  try {
    
    let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
  let result = await res.json();
  setData(result);
  setErr(null);
  }
  catch (error){
    setErr("Error on the fetch");
   
  }
  finally{
    setIsLoading(false);
  }
 };


 return (
  <>
  
    <h1 style={{ fontSize:"25px", color:"purple", fontFamily:"sans-serif",}}>Fetch Data with the help of React</h1>
    <button onClick={fetchData} disabled={isLoading}>
      {isLoading ? "Loading..." : "Fetch Data"}
      </button>
      {err && <p style={{ color: "pink"}}>{err}</p>}
<div>
  {}
  <DataDisplay data= {data} />
</div>
  </>
 )
 

  
}

export default App
