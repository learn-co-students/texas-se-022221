//component that recieves an array and maps it
//for every cat I want an li
import CatCard from "./CatCard";

const CatList = (props) => {
  return (
    <div>
      <h1>Cat List</h1>
      {props.allCats.map(cat=> <CatCard key={cat.id} singleCat={cat} favoriteCat={props.addToFavorite}/>)}
    </div>
  );
};

export default CatList;
