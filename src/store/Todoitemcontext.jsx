import { createContext, useReducer, useState } from "react";

export const TodoContextcontainer = createContext([ {
    manajer: [],
    addtodo: () => {},
    deletetodo: () => {},
}]);

const TheateritemReducer =(state,action)=>{
    let currentitem = state;
    if(action.type === "NEW_ADD"){
       currentitem = [...state, {id:action.payload.ids,name:action.payload.itemnam,time:action.payload.itemtime,date:action.payload.itemdate}];
    }
    else if(action.type === "NEW_DELETE"){
        currentitem  = state.filter(item => item.name !== action.payload.itemname);
    }
    return currentitem;
}
const Todoitemcontext = ({children}) =>{
    // let [manajer,setitem] = useState([]);

    let [manajer,dispatchitem] = useReducer(TheateritemReducer,[]);

    
    const additemtodo = (ids,itemnam,itemtime,itemdate) =>{
        let additem={
            type:"NEW_ADD",
            payload:{
                ids,
                itemnam,
                itemtime,
                itemdate,
            }
        }
        return dispatchitem(additem);
    }

    const deleteitemtodt = (itemname) =>{
        let deleteitem={
            type:"NEW_DELETE",
            payload:{
                itemname,
            }
        }
        return dispatchitem(deleteitem);
    }

    return (
        <TodoContextcontainer.Provider value={
            {
                manajer,
                additemtodo,
                deleteitemtodt,
            }
        }>
            {children}
        </TodoContextcontainer.Provider>
    );
}
export default Todoitemcontext;