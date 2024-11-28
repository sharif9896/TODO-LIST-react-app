const Todoitem = ({megadata , itemdel}) =>{
    return (
        <>
            {megadata.map(item =>  <div className="field-value">
                
                <div className="fieldvalue">
                    {item.id + 1}
                </div>
                <div className="fieldvalue">
                    {item.name}
                </div>
                <div className="fieldvalue">
                    {item.time}
                </div>
                <div className="fieldvalue">
                    {item.date}
                </div>
                <button className="btndel" onClick={() => itemdel(item.name)}>Delete</button>
            </div>)}
           
             
        </>
    );
}
export default Todoitem;