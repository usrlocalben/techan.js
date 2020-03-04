
import { arrow as _arrow } from './arrow.js';
import { util } from '../util/index.js';

export const svg = function(d3) {
  return {
    arrow: _arrow(util().functor)
  };
};
