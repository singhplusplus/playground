import { preparePokemonResponse } from "./prepare-pokemon-resp";
import {
  select,
  scaleLinear, scaleBand,
  max,
  axisLeft, axisBottom
} from "d3";

export const pokemonFetchURL = () => {
  const pokemonURL = 'https://raw.githubusercontent.com/singhplusplus/d3-playground/main/csv/Pokemon.csv';
  // const pokemonURL = 'http://localhost:3003/pokemon';
  return pokemonURL;
}

export const visualizePokemon = (fetchedData, {svgConfig, maingroupConfig, originConfig}) => {
  let pokemonList = [];
  pokemonList = preparePokemonResponse(fetchedData);

  // console.log('pokemonList - ', pokemonList);
  const pokemonTotal = pokemon => pokemon.Total;
  // const pokemonTotalDomain = pokemon => pokemon.Total + 80;
  const pokemonId = pokemon => pokemon.id;
  const pokemonName = pokemon => pokemon.Name;
  const pokemonHP = pokemon => pokemon.HP;
  const pokemonAttack = pokemon => pokemon.Attack;
  const pokemonDefense = pokemon => pokemon.Defense;
  const pokemonSpAtk = pokemon => pokemon.SpAtk;
  const pokemonSpDef = pokemon => pokemon.SpDef;
  const pokemonSpeed = pokemon => pokemon.Speed;

  const innerHeight = svgConfig.height - maingroupConfig.margin.top - maingroupConfig.margin.bottom;
  const innerWidth = svgConfig.width - maingroupConfig.margin.left - maingroupConfig.margin.right;

  const xScale = scaleLinear()
      .domain( [ 0, max(pokemonList, pokemonTotal) ] )
      .range([0, innerWidth])
      .nice();
  const yScale = scaleBand()
      .domain( pokemonList.map(pokemonName) )
      .rangeRound([0, innerHeight])
      .padding(0.2);

  // console.log('pokemon loaded - x, y value ', pokemonList[1],
  //      xScale(pokemonList[1].Total), yScale(pokemonList[1].Name), 'pokemon loaded - bar width ', yScale.bandwidth());

  const svgSelection = select('svg').attr('width', svgConfig.width).attr('height', svgConfig.height);

  const maingroupSelection = svgSelection.append('g')
      .attr('transform', `translate(${ originConfig.x }, ${ originConfig.y })`);

  maingroupSelection.append('g').call(axisLeft(yScale));

  maingroupSelection.append('g').call(axisBottom(xScale))
      .attr('transform', `translate(0, ${innerHeight})`);

  maingroupSelection.selectAll('rect')
      .data(pokemonList)
      .join(
        enter => {
            const vertPosition = (rect) => 
                rect.attr('height', yScale.bandwidth())
                .attr('y', pokemon => yScale(pokemonName(pokemon)));

            enter.append('rect')
                .attr('fill', '#df5322')    // dark orange
                .attr('width', pokemon => xScale(pokemonHP(pokemon)))
                .call(vertPosition);

            enter.append('rect')
                .attr('fill', '#29e641')    // green
                .attr('width', pokemon => xScale(pokemonAttack(pokemon)))
                .attr('x', pokemon => xScale(pokemonHP(pokemon)))
                .call(vertPosition);

            enter.append('rect')
                .attr('fill', '#7553d8')    // purple
                .attr('width', pokemon => xScale(pokemonDefense(pokemon)))
                .attr('x', pokemon => xScale(pokemonAttack(pokemon)) + xScale(pokemonHP(pokemon)))
                .call(vertPosition);

            enter.append('rect')
                .attr('fill', '#c58358')    // wooden
                .attr('width', pokemon => xScale(pokemonSpAtk(pokemon)))
                .attr('x', pokemon => xScale(pokemonAttack(pokemon)) + xScale(pokemonHP(pokemon))
                        + xScale(pokemonDefense(pokemon)))
                .call(vertPosition);

            enter.append('rect')
                .attr('fill', '#32c4f5')    // cyan
                .attr('width', pokemon => xScale(pokemonSpDef(pokemon)))
                .attr('x', pokemon => xScale(pokemonAttack(pokemon)) + xScale(pokemonHP(pokemon))
                        + xScale(pokemonDefense(pokemon)) + xScale(pokemonSpAtk(pokemon)))
                .call(vertPosition);

            enter.append('rect')
                .attr('fill', '#ee7698')    // pink
                .attr('width', pokemon => xScale(pokemonSpeed(pokemon)))
                .attr( 'x', pokemon => xScale(pokemonAttack(pokemon)) + xScale(pokemonHP(pokemon))
                        + xScale(pokemonDefense(pokemon)) + xScale(pokemonSpAtk(pokemon))
                        + xScale(pokemonSpDef(pokemon)) )
                .call(vertPosition);
        },
        update => update.attr('fill', 'green'),
        exit => exit.remove()
      );
}