export const preparePokemonResponse = (pokemonsResp) => {
  pokemonsResp.forEach(pokemon=> {
      pokemon.Total = +pokemon.Total;
      pokemon.HP = +pokemon.HP;
      pokemon.Attack = +pokemon.Attack;
      pokemon.Defense = +pokemon.Defense;
      pokemon['SpAtk'] = +pokemon['Sp. Atk'];
      pokemon['SpDef'] = +pokemon['Sp. Def'];
      pokemon.Speed = +pokemon.Speed;
      pokemon.id = pokemon['#'] + ' ' + pokemon['Name']
      // console.log("pokemon updated", pokemon);
  });
  return pokemonsResp;
}