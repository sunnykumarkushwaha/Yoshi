import React from "react";
import { useState, useEffect } from "react";

const Toddlist = () => {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);

  // const

  // useEffect((),[])

  const additem = (e) => {
    //     setdata([...data, input])
    //     console.log(data)
    // setinput('')

    setdata((e) => {
      const updateed_list = [...e, input];
      setinput("");
      console.log(updateed_list);
      return updateed_list;
    });
  };

  const removehandler = (i) => {
    const updateddata = data.filter((e, id) => {
      return i != id;
    });
    setdata(updateddata);
  };

  const Removeall = () => {
    setdata("");
  };
  return (
    <>
      <div>
        <div>Todo List</div>
      </div>
      <div>
        <input
          type="text"
          value={input}
          placeholder="enter the"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button onClick={additem}>ADD</button>
        {data != [] &&
          data.map((e, i) => {
            return (
              <>
                <p key={i}> {e}</p>
                <button onClick={() => removehandler(i)}>remove</button>
              </>
            );
          })}
        {data.length >= 1 && <button onClick={Removeall}>Remove all</button>}
      </div>
    </>
  );
};

export default Toddlist;
