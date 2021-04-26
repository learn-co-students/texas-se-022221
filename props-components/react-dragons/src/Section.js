//import the card
import DragonCard from "./DragonCard";

const Section = (props) => {
    let styling = () => {
        if(props.name == 'Home Dragons'){
            return {backgroundColor:'green'}
        }else{
            return{backgroundColor:'red'}
        }
    }
  return (
    <div style={styling()}>
      <h1>{props.name}</h1>
      {console.log('props in Section.js', props)}
      {/* call it in div */}
      {/* iterate through dragon array */}
      {props.dragonArray.map((dragon) => {
        return <DragonCard dragon={dragon} toggleDragon={props.toggleDragon}/>;
      })}
    </div>
  );
};

// function Section(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       {console.log(props.dragonArray)}
//       {/* call it in div */}
//       {/* iterate through dragon array */}
//       {props.dragonArray.map(dragon => {
//           return <DragonCard dragon={dragon}/>
//       })}
//     </div>
//   );
// }

export default Section;
