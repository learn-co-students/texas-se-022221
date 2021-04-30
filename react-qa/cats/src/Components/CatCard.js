const CatCard = (props) => {


    // {
    //     "id": 1,
    //     "name": "Nawta Cat",
    //     "age": 5,
    //     "color": "Brown",
    //     "LivesLeft": 1,
    //     "personality": "Doggish",
    //     "breed": "Dog",
    //     "image": "https://www.cdc.gov/healthypets/images/pets/angry-dog.jpg"
    //   }
    let {name, age, color, livesLeft, personality, breed, image} = props.singleCat
    const handleFavorite = () => {
        props.favoriteCat(props.singleCat)
    }
  return (
    <div>
      <h2>{name}</h2>
      <hr/>
      <h3>Age: {age} </h3>
      <p>{name} is a {personality} cat</p>
      <br/>
      <img src={image} style={{width:'150px'}}/>
      <br/>
    <button onClick={handleFavorite}>Favorite Me </button>
    </div>
  );
};

export default CatCard
