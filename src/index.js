// import * as d3 from "d3";
import { vizPokemon } from "./commons/visualize";

import "./main.scss";
import img from "./favicon.ico";

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

vizPokemon(vizAttr);