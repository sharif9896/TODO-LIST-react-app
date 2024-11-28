import { useContext, useRef, useState } from "react";
import { TodoContextcontainer } from "../store/Todoitemcontext";


const AddTodo = () => {

  let {additemtodo,manajer} = useContext(TodoContextcontainer);

    // let [itemnam,setname] = useState("");
    // let [itemtime,settime] = useState("");
    // let [itemdate,setdate] = useState("");

    // const todonames = (event)=>{
    //     setname(event.target.value);
    // }
    // const todotime = (event) =>{
    //     settime(event.target.value)
    // }
    // const tododate = (event) =>{
    //     setdate(event.target.value);
    // }
    let itemnam= useRef();
    let itemtime= useRef();
    let itemdate= useRef();

    let count=manajer.length;
    let id = count;
    // console.log("The Length is " + id)
    const additembackend = () =>{
      let item1 = itemnam.current.value;
      let item2 = itemtime.current.value;
      let item3 = itemdate.current.value;
      additemtodo(id,item1,item2,item3);
      itemnam.current.value = "";
      itemtime.current.value = "";
      itemdate.current.value = "";
    }


  return (
    <>
    
      <div className="field-container">
        <div className="field1">
          <input
            type="text"
            className="field"
            placeholder=" Enter Your Todo Here"
           
            ref={itemnam}
          />
        </div>
        <div className="field2">
          <input
            type="time"
            className="field"
            placeholder=" Enter Your Todo Here"
           
            ref={itemtime}
          />
        </div>
        <div className="field3">
          <input
            type="date"
            className="field"
            placeholder=" Enter Your Todo Here"
           
            ref={itemdate}
          />
        </div>
        <button className="btntodo" onClick={additembackend}>ADD</button>
      </div>
    </>
  );
};
export default AddTodo;
