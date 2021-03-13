// import * as d3 from "d3";
import { 
    json,
    csv,
    select,
    scaleLinear, scaleBand,
    max,
    axisLeft, axisBottom 
} from "d3";

let pokemonList = [];
const svgHeight = 1000;
const svgWidth = 1200;
const pokemonCsvUrl = 'https://raw.githubusercontent.com/singhplusplus/d3-playground/main/csv/Pokemon.csv';
// const pokemonCsvUrl = 'http://localhost:3003/pokemon';
const svg = select('svg').attr('width', svgWidth).attr('height', svgHeight);
const margin = {left: 170, top: 20, right: 20, bottom: 50};
const innerHeight = svgHeight - margin.top - margin.bottom;
const innerWidth = svgWidth - margin.left - margin.right;

const fetchCSVData = async (url) => {
    // return await json(url);
    return await csv(url);
};

const preparePokemonListData = (pokemonsResp) => {
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

const visualize = fetchedData => {
    pokemonList = preparePokemonListData(fetchedData);

    // console.log('pokemonList - ', pokemonList);
    const pokemonTotal = pokemon => pokemon.Total;
    const pokemonTotalDomain = pokemon => pokemon.Total + 80;
    const pokemonId = pokemon => pokemon.id;
    const pokemonName = pokemon => pokemon.Name;
    const pokemonHP = pokemon => pokemon.HP;
    const pokemonAttack = pokemon => pokemon.Attack;
    const pokemonDefense = pokemon => pokemon.Defense;
    const pokemonSpAtk = pokemon => pokemon.SpAtk;
    const pokemonSpDef = pokemon => pokemon.SpDef;
    const pokemonSpeed = pokemon => pokemon.Speed;

    const xScale = scaleLinear()
        .domain( [ 0, max(pokemonList, pokemonTotalDomain) ] )
        .range([0, innerWidth]);
    const yScale = scaleBand()
        .domain( pokemonList.map(pokemonName) )
        .rangeRound([0, innerHeight])
        .padding(0.1);

    console.log('pokemon loaded - x, y value ', pokemonList[1],
         xScale(pokemonList[1].Total), yScale(pokemonList[1].Name), 'pokemon loaded - bar width ', yScale.bandwidth());

    const innerGroup = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);
    innerGroup.append('g').call(axisLeft(yScale));
    // .attr('stroke', ``);
    innerGroup.append('g').call(axisBottom(xScale))
        .attr('transform', `translate(0, ${innerHeight})`);

    innerGroup.selectAll('rect')
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
};

const printError = e => {
    console.error('error', e);
};

fetchCSVData(pokemonCsvUrl).then(visualize).catch(printError);
