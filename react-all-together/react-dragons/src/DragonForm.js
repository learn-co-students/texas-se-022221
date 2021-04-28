//import React goodies
import React, {Component} from 'react'
//declare our class component
class DragonForm extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        console.log('form submitted')
        // debugger
        //format my data
        let newName = e.target[0].value
        let newDescription = e.target[1].value
        let newImage = e.target[2].value
      
        let newDragon = {
            name: newName,
            description: newDescription,
            image: newImage,
            atWar: false,
          }

          e.target.reset()

        //???
        this.props.newDragon(newDragon)
    }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <label>Dragon Name</label>
                <input type='text' placeholder='name'/>
                <br/>
                <label>Dragon Description</label>
                <input type='text' placeholder='description'/>
                <br/>
                <label>Dragon Image</label>
                <input type='text' placeholder='image'/>
                <br/>
                <input type='submit'/>

            </form>
        )
    }
}
//export default our component

export default DragonForm