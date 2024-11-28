import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoContextcontainer } from "../store/Todoitemcontext";

const TodoItems = () => {
  let {deleteitemtodt , manajer} = useContext(TodoContextcontainer)
  return (
    <>
      <div className="min-containers">
           <Todoitem itemdel={deleteitemtodt} megadata={manajer}></Todoitem>
        </div>
       
    </>
  );
};
export default TodoItems;
