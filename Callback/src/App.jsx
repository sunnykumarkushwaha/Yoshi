import { useState, useMemo } from "react";
import "./App.css";
import Child from "./Child";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [add, setadd] = useState(0);
  const [thirdd, setthirdd] = useState(0);
  const [sub, setsub] = useState(0);

  const [five,setfive]=useState(0)
  const adding = () => {
    console.log("add one ")
    setadd(add + 1);
  };

  const Propscreate = useCallback(() => {}, [count]);

  const third = useCallback(() => {
    setthirdd(thirdd + 1);
  }, []);

//  const third=()=>{
//   setthirdd(thirdd + 1);

//  }

  const addfive=()=>{
    setfive(five+1)
  }

  return (
    <>
      <h3>Usecallback hook </h3>
      <p>
        it almost simmliar to theusememo hooks but in it return the memoried
        callback function inserted of value
      </p>

      <br></br>
      <button onClick={() => adding()}>addition</button>
      <span>{add}</span>
      <br></br>
      <br></br>
      <button onClick={() => setCount(count + 5)}>count</button>
      {/* <button onClick={}>subtract</button> */}

      <span>{count}</span>
      <Child Propscreate={Propscreate} count={count} third={third} />

      <h1>{thirdd}</h1>
      <button onClick={() => third()}>than</button>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={addfive}>five</button>
      <br></br>
      {five}
    </>
  );
}

export default App;
