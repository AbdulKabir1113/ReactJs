import Item from "./Item"; 

function List1() {
    return(
        <div>
            <h2>List Items</h2>
            <ul>
                <Item title="Mango" price={100}/>
                <Item title="Apple" price={200}/>
                
            </ul>
        </div>
    )
}

export default List1