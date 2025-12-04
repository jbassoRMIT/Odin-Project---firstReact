function Item({name,isPacked}){
    if(isPacked){
        return(
            <li>{name} &#9989;</li>
        )
    }
    else{
        return(
            <li>{name}</li>
        )
    }
}

function PackingList(){
    const items=[
        {name:"toothbrush",isPacked:true},
        {name:"bag",isPacked:false},
        {name:"wallet",isPacked:true},
        {name:"coffee",isPacked:false}
    ]
    
    return(
        <div>
            <p>My packing list:</p>
            <ul>
                {items.map((item)=>{
                    return <Item name={item.name} isPacked={item.isPacked}/>
                })}
            </ul>
        </div>
    )
}

export default PackingList;