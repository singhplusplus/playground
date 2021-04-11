import { fetchCSVData, fetchJSONData } from "./fetch-data";
import { printError } from "./print-error";

import { visualizePokemon, pokemonFetchURL } from "./../components/pokemon-linear-viz";

export function vizPokemon(vizAttr) {
  fetchCSVData(pokemonFetchURL()).then(
      fetchedData => {
          visualizePokemon(fetchedData, vizAttr)
      }
  ).catch(printError);
}