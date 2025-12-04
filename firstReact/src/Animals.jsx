function ListItem({name}){
    return(
        <li>{name}</li>
    )
}

function Animals(){
    const animals=["dog","cat","lion","tiger"];

    const animalsList=animals.map((animal)=>{
        if(animal[0]=="l"){
            return <li className="valid">{animal}</li>
        }
        else{
            return <li className="invalid">{animal}</li>
        }
    })
    
    return(
        <div>
            <p>My favourite animals are:</p>
            <ul>
                {animals.map((animal)=>{
                    return <ListItem name={animal}/>
                })}
            </ul>
        </div>
    )
}

export default Animals;

//Note always have to use word "return" inside callbacks whenever there is curly braces {}