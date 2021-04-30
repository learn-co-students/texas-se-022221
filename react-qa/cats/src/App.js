import React from 'react'
import CatList from './Components/CatList'
import FavoriteCatList from './Components/FavoriteCatList'
import CatForm from './Components/CatForm'
import CatFilter from './Components/CatFilter'

class App extends React.Component {
  state= {
    cats: [],
    favoriteCats: [],
    searchTerm: ''
  }


  handleSearchTerm = (e) =>{
    //update searchTerm in state
    this.setState({searchTerm:e.target.value})

  }
  favoriteTheCat = (selectedCat) => {
    if(this.state.favoriteCats.find(cat => cat.id === selectedCat.id)){
      alert('this cat has already been favorited')
    }
    else{
      this.setState({
        favoriteCats:[...this.state.favoriteCats, selectedCat]
      })
    }
  }
  componentDidMount(){
    fetch("http://localhost:3001/cats")
    .then(res=>res.json())
    .then(data=> this.setState({cats:data}))
  }

  //adding cat
  addCat = (catObj) => {
    //post request
    const reqPackage = {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accept':'applciation/json'
      },
      body: JSON.stringify(catObj)
    }
    fetch('http://localhost:3001/cats', reqPackage)
    .then(res=>res.json())
    .then(newCat => {
      this.setState({cats:[...this.state.cats, newCat]})
    })
  }
  render(){
    // let filteredCats = () =>{
    //   return this.state.cats.filter(cat => cat.name.includes(this.state.searchTerm))
    // }
    let filteredCats = this.state.cats.filter(cat => cat.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return(
      <div>
      <h1>This is my Cat App</h1>
      <br/>
      <CatFilter handleSearchTerm={this.handleSearchTerm}/>
      <CatForm addCat={this.addCat}/>
      <CatList allCats={filteredCats} addToFavorite={this.favoriteTheCat}/>
      <FavoriteCatList favoriteCats={this.state.favoriteCats}/>
      </div>
    )
  }
}

export default App;
