import logo from './logo.svg';
import './App.css';

import DragonHeader from './DragonHeader'
import DragonCard from './DragonCard'

const dragons = [
  {
      "id": 1,
      "name": "Toothless",
      "description": "A Night Fury",
      "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
      "atWar": false
  },
  {
      "id": 2,
      "name": "Bozar",
      "description": "An uninteresting dragon",
      "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
      "atWar": false
  },
  {
      "id": 3,
      "name": "Tomar",
      "description": "An interesting dragon",
      "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
      "atWar": true
  },
  {
    "id": 4,
    "name": "Timbsghidora",
    "description": "Dead ass a kaiju my guy" ,
    "image": "https://pbs.twimg.com/media/D5fzcsAV4AA5EcQ.jpg",
    "atWar":true
  }
]

function App() {
  // JSX -- Javascript XML 
  // modified html to work with js through Babel

  return (
    <div className="App">
      <DragonHeader/>
      {dragons.map(dragon => {
        return <DragonCard dragon={dragon}/>
      })}
    </div>
  );
}

export default App;
