const shortName=function(fullName){
    const names=fullName.split(" ");
    const abbName=`${names[0][0]}. ${names[1][0]}`;
    return abbName;
}

function Greeting({person}){
    return(
        <div>
            <h2>Hello</h2>
            <h3>Is it me you're looking for <b>{shortName(person)}</b>?</h3>
        </div>
    )
}

export default Greeting;