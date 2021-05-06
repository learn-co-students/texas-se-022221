import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import DragonHeader from "./DragonHeader";
import Section from "./Section";
import DragonForm from "./DragonForm";
import LogIn from "./LogIn";
import React from "react";

class App extends React.Component {
  state = {
    dragons: [],
  };

  componentDidMount() {
    console.log("component mounted!!!!!!!");
    //when component mounts
    //we want to fetch to http://localhost:3001/dragons
  }

  getDragons = () => {
    fetch("http://localhost:3000/api/v1/dragons",{
      method:"GET",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then((res) => res.json())
      .then((dragonData) => {
        this.setState({ dragons: dragonData });
      });
  }

  toggleDragon = (clickedDragon) => {
    console.log("clickedDragon has been clicked", clickedDragon);
    // Ii want a function that handles any clickedDragon clicked
    // clickedDragon.atWar = !clickedDragon.atWar;
    // if its dragon.atWar property is false, it will become true
    // if its dragon.atWar property is true, it will become false
    //then I want to rerender to reflect changes
    // this.setState({
    //   dragons: this.state.dragons.map((dragon) =>
    //     dragon === clickedDragon ? clickedDragon : dragon
    //   ),
    // });

    //persistance
    fetch(`http://localhost:3001/dragons/${clickedDragon.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        atWar: !clickedDragon.atWar,
      }),
    })
      .then((res) => res.json())
      .then((updatedDragon) => {
        //make copy of this.state.drgaons array
        // let dragonArr = this.state.dragons
        // //remove old dragon
        // let newDragonArr = dragonArr.filter(dragon => dragon.id != updatedDragon.id)
        // //add newupdatedDragon
        // let newState = [...newDragonArr, updatedDragon]
        // //then update state with data
        // this.setState({
        //   dragons: newState,
        // });
        //or map through data
        this.setState({
          dragons: this.state.dragons.map((dragon) =>
            dragon.id === updatedDragon.id ? updatedDragon : dragon
          ),
        });
      });
  };

  addDragon = (dragonArg) => {
    //test passing down this function to DragonForm as a PROP
    console.log("adding dragon", dragonArg);
    // this.state.dragons.push(dragonArg)
    console.log('props ', this.props)
    let reqPackage = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dragonArg),
    };
    //make our fetch POST
    fetch("http://localhost:3001/dragons", reqPackage)
      //after we get response from server
      .then((res) => res.json())
      .then((postedDragon) => {
        //update state
        this.setState({
          dragons: [...this.state.dragons, postedDragon],
        });
      });
  };

  deleteDragon = (dragonArg) => {
    console.log("delete this ", dragonArg);

    fetch(`http://localhost:3001/dragons/${dragonArg.id}`, {
      method: "DELETE",
    });
    this.setState({
      dragons: this.state.dragons.filter((dragon) => {
        return dragon != dragonArg;
      }),
    });
  };

  handleLogin = (e) => {
    e.preventDefault()
    let user = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    let reqPackage = {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(user)
    }

    fetch('http://localhost:3000/api/v1/login', reqPackage)
    .then(res => res.json())
    .then(data=> {
      // localStorage.token = data.token
      localStorage.setItem("token", data.token)
      this.getDragons()
      

    })
  }
  handleLogout = () =>{
    // clear localstorage
    console.log('clear localstorage')
    localStorage.clear()
    // redirect 
    
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {localStorage.token ? <Link to="/allDragons">allDragons</Link> : <Redirect to="/"/>}
            </li>
            <li>
              <Link to="/newDragonForm">Add New Dragon</Link>
            </li>
            <li>
              <button onClick={()=> this.handleLogout() }>Log Out</button>
            </li>
          </ul>
        </nav>
        <DragonHeader />
        
          <Switch>
            <Route exact path="/">
              {/* form to login goes here */}
              <LogIn handleLogin = {this.handleLogin}/>
            </Route>
            <Route exact path="/allDragons">
              <Section
                name="Home Dragons"
                dragonArray={this.state.dragons.filter(
                  (dragon) => dragon.atWar === false
                )}
                toggleDragon={this.toggleDragon}
                deleteDragon={this.deleteDragon}
              />
              <Section
                name="War Dragons"
                dragonArray={this.state.dragons.filter(
                  (dragon) => dragon.atWar === true
                )}
                toggleDragon={this.toggleDragon}
                deleteDragon={this.deleteDragon}
              />
            </Route>
            <Route exact path="/newDragonForm" render={(routerProps)=> <DragonForm newDragon={this.addDragon} {...routerProps}/>}>
              
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// const dragons = [
//   {
//       "id": 1,
//       "name": "Toothless",
//       "description": "A Night Fury",
//       "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
//       "atWar": false
//   },
//   {
//       "id": 2,
//       "name": "Bozar",
//       "description": "An uninteresting dragon",
//       "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
//       "atWar": false
//   },
//   {
//       "id": 3,
//       "name": "Tomar",
//       "description": "An interesting dragon",
//       "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
//       "atWar": true
//   },
//   {
//     "id": 4,
//     "name": "Timbsghidora",
//     "description": "Dead ass a kaiju my guy" ,
//     "image": "https://pbs.twimg.com/media/D5fzcsAV4AA5EcQ.jpg",
//     "atWar":true
//   }
// ]

// function App() {
//   // JSX -- Javascript XML
//   // modified html to work with js through Babel

//   return (
//     <div className="App">
//       <DragonHeader/>
//       {dragons.map(dragon => {
//         return <DragonCard dragon={dragon}/>
//       })}
//     </div>
//   );
// }

// export default App;
