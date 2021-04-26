//import React 
import React from 'react'

//declare class 
class DragonCard extends React.Component {
    //have our render 
    render(){
        //return some JSX
        console.log('props in DragonCard', this.props.dragon.name)
        return (
            <div className='card'>
                <h2>{this.props.dragon.name}</h2>
                <h3>{this.props.dragon.description}</h3>
                <img src={this.props.dragon.image} style={{width:'100px'}} ></img>
            </div>
            )
    }
}


//export default our component
export default DragonCard