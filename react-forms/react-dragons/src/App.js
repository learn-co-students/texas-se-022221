import logo from "./logo.svg";
import "./App.css";

import DragonHeader from "./DragonHeader";
import Section from "./Section";
import DragonForm from "./DragonForm";
import React from "react";

class App extends React.Component {
  state = {
    dragons: [
      {
        id: 1,
        name: "Toothless",
        description: "A Night Fury",
        image: "https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
        atWar: false,
      },
      {
        id: 2,
        name: "Bozar",
        description: "An uninteresting dragon",
        image:
          "https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
        atWar: false,
      },
      {
        id: 3,
        name: "Tomar",
        description: "An interesting dragon",
        image: "https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
        atWar: true,
      },
      {
        id: 4,
        name: "Timbsghidora",
        description: "Dead ass a kaiju my guy",
        image: "https://pbs.twimg.com/media/D5fzcsAV4AA5EcQ.jpg",
        atWar: true,
      },
    ],
  };

  toggleDragon = (clickedDragon) => {
    console.log("clickedDragon has been clicked", clickedDragon);
    // Ii want a function that handles any clickedDragon clicked
    clickedDragon.atWar = !clickedDragon.atWar;
    // if its dragon.atWar property is false, it will become true
    // if its dragon.atWar property is true, it will become false
    //then I want to rerender to reflect changes
    this.setState({
      dragons: this.state.dragons.map((dragon) =>
        dragon === clickedDragon ? clickedDragon : dragon
      ),
    });
  };

  addDragon = (dragonArg) => {
    //test passing down this function to DragonForm as a PROP
    console.log("adding dragon", dragonArg);
    // this.state.dragons.push(dragonArg)
    this.setState({
      dragons: [...this.state.dragons, dragonArg],
    });
  };

  deleteDragon = (dragonArg) => {
    console.log("delete this ", dragonArg);
    this.setState({
      dragons: this.state.dragons.filter((dragon)=>{ return dragon != dragonArg})
    })
  };

  render() {
    return (
      <div className="App">
        <DragonHeader />
        <DragonForm newDragon={this.addDragon} />
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
