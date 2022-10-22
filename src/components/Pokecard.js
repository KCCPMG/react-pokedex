import React from 'react';
import '../styles/Pokecard.css';



const Pokecard = ({pokemon=pokemon}) => {

  const {id, name, type, base_experience} = pokemon;
  console.log(id, name, type, base_experience);
  console.log("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + String({id}) + ".png");
  console.log("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + {id} + ".png");
  console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}`);


  return (
    <div className="Pokecard">
      <h5>{name}</h5>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}


export default Pokecard;