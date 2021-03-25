// import * as d3 from "d3";
import { fetchCSVData, fetchJSONData } from "./commons/fetch-data";
import { printError } from "./commons/print-error";
// import { visualize } from "./commons/visualize";

import { visualizePokemon, pokemonFetchURL } from "./components/pokemon-linear-viz";

import "./main.scss";

const svg = {
    height: 800,
    width: 1200
};
const maingroup = {
    margin: {left: 170, top: 20, right: 20, bottom: 50}
};
const origin = {
    x: maingroup.margin.left,
    y: maingroup.margin.top
};

const vizAttr = {
    svgConfig: svg,
    maingroupConfig: maingroup,
    originConfig: origin
}

// TODO : use visualize from visualize.js - hint .bind would be required
const visualize = (fetchedData) => {
    visualizePokemon(fetchedData, vizAttr);
};

fetchCSVData(pokemonFetchURL()).then(
    visualize
).catch(printError);
// fetchJSONData(pokemonFetchURL()).then(visualize).catch(printError);
// visualize.bind(this, {visualizePokemon, vizAttr})