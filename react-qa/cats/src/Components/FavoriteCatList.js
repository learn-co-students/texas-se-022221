import CatCard from './CatCard'

const FavoriteCatList = (props) => {
  return (
    <div>
      <h1>Favorite Cats</h1>
      <hr />
      {props.favoriteCats.map(cat=><CatCard key={cat.id} singleCat={cat}/>)}
    </div>
  );
};

export default FavoriteCatList;
