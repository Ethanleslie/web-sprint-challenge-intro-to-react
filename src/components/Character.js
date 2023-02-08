// Write your Character component here


 function Character(props) {
    return (
        <div className= 'container'>
            <h1> {props.data.name} </h1>
        </div>
    )
}



export default Character;