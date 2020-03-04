import d3 from 'd3';

import { indicators } from './indicator/index.js';
import { accessors } from './accessor/index.js';
import { svg } from './svg/index.js';
import { plot } from './plot/index.js';
import { scale } from './scale/index.js';

export default {
//    version: require('../build/version'),
    accessor: accessors(),
    indicator: indicators(d3),
    plot: plot(d3),
    scale: scale(d3),
    svg: svg(d3)
};