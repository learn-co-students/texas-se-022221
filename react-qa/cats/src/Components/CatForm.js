import React from 'react'

class CatForm extends React.Component{
    state={

    }

    changeHandler = (e) =>{
        let {name, value} = e.target
        this.setState({[name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        console.log(this.state)
        this.props.addCat(this.state)
    }
    render(){

        // "name": "Nawta Cat",
        //     "age":  5,
        //     "color": "Brown",
        //     "livesLeft": 1 ,
        //     "personality": "Doggish",
        //     "breed": "Dog",
        //     "image": "https://www.cdc.gov/healthypets/images/pets/angry-dog.jpg"
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' placeholder="name" name='name' onChange={this.changeHandler}/>
                <br/>
                <label>Age</label>
                <input type='number' placeholder="age" name='age'onChange={this.changeHandler}/>
                <br/>
                <label>Breed</label>
                <input type='text' placeholder="breed" name='breed'onChange={this.changeHandler}/>
                <br/>
                <label>Color</label>
                <input type='text' placeholder="color" name='color'onChange={this.changeHandler}/>
                <br/>
                <label>Live Left</label>
                <input type='number' placeholder="lives left" name='livesLeft'onChange={this.changeHandler}/>
                <br/>
                <label>Personality</label>
                <input type='text' placeholder="personality" name='personality'onChange={this.changeHandler}/>
                <br/>
                <label>Image</label>
                <input type='text' placeholder="image" name='image'onChange={this.changeHandler}/>
                <br/>
                <input type='submit'/>
            </form>
        )

    }
}

export default CatForm