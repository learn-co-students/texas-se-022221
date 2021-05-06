//import React 
import React from 'react'

//declare class 
class DragonCard extends React.Component {
    //have our render 
    clickHandler = () =>{
        console.log('this dragon  need to be gone')
        //call some function
        this.props.deleteDragon(this.props.dragon)
    }
    render(){
        //return some JSX
        console.log('props in DragonCard', this.props.dragon.name)
        let { name, description, image } = this.props.dragon
        return (
            <div>

            <div className='card' onClick = {() => this.props.toggleDragon(this.props.dragon)}>
                <h2>{name}</h2>
                <h3>{description}</h3>
                <img src={image} style={{width:'100px'}} ></img>
                <br/>
            </div> 
                <button onClick={this.clickHandler}>Delete Me  :(</button>
            
            </div>
            )
    }
}


//export default our component
export default DragonCard