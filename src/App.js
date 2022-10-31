import './App.css';
import {useState}from "react";
import Axios from 'axios';

  function App(){
   const [Name,setPokemonName]= useState("");
   const[pokemonChosen,setPokemonChosen] = useState(false);
   const [pokemon,setPokemon]= useState({
    name:"",
    species:"",
    img:"",
    hp:"",
  attack:"",
  defense:"",
  type:"",
   })
   
   const searchPokemon = ()=>{
 Axios.get(`https://pokeapi.co/api/v2/pokemon/${Name}`).then((response)=>{
  setPokemon({
    name:Name,
    species:response.data.species.name,
     img: response.data.sprites.front_default,
    hp:response.data.stats[0].base_stat,
  attack:response.data.stats[1].base_stat,
  defense:response.data.stats[2].base_stat,
  type:response.data.types[0].type.name,
})
 });
 setPokemonChosen(true)
   };

  return (
    <div className="App">
      <div className = "title">
<h1>Pokemon Stats</h1>
<input type="text" onChange= {(event)=>{setPokemonName(event.target.value)}}></input>
<button onClick={searchPokemon}>Search Pokemon</button>
 </div>
 <div className='display'>
  {!pokemonChosen ?(<h1>Please choose a Pokemon</h1>):(<center>
  <h1>{pokemon.name}</h1>
  <img src={pokemon.img}/>
  <h3>Species:{pokemon.species}</h3>
  <h3>Type:{pokemon.type}</h3>
  <h4>Hp:{pokemon.hp}</h4>
  <h4>Attack:{pokemon.attack}</h4>
  <h4>Defense:{pokemon.defense}</h4>
  </center>
  )}
 </div>
    </div>
  );
}

export default App;
