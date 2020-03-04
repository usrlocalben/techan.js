import { scale as _scale } from '../scale/index.js';
import { accessors as _accessors } from '../accessor/index.js';
import { plot as _plot } from './plot.js';
import { util } from '../util/index.js';
import { plotmixin as _plotmixin } from './plotmixin.js';
import { candlestick as _candlestick} from './candlestick.js';
import { axisannotation as _axisannotation } from './axisannotation.js';
import { svg as _svg } from '../svg/index.js';

import { line } from './line.js';

import  { adx } from './adx.js';
import  { aroon } from './aroon.js';
import  { atrtrailingstop } from './atrtrailingstop.js';
import  { bollinger } from './bollinger.js';
import  { crosshair } from './crosshair.js';
import  { ichimoku } from './ichimoku.js';
import  { macd } from './macd.js';
import  { ohlc } from './ohlc.js';
import  { rsi } from './rsi.js';
import  { stochastic } from './stochastic.js';
import  { supstance } from './supstance.js';
import  { tick } from './tick.js';
import  { tradearrow } from './tradearrow.js';
import  { trendline } from './trendline.js';
import  { williams } from './williams.js';
import  { volume } from './volume.js';

import * as d3 from 'd3';
function d3_event() {
  return d3.event;
}

export const plot = function(d3) {
  var scale = _scale(d3),
      accessor = _accessors(),
      plot = _plot(d3.line, d3.area, d3.curveMonotoneX, d3.select),
      d3_functor = util().functor,
      plotMixin = _plotmixin(d3.scaleLinear, d3_functor, scale.financetime, plot.dataSelector, plot.barWidth),
      candlestick = _candlestick(d3.scaleLinear, d3.extent, accessor.ohlc, plot, plotMixin),
      axisannotation = _axisannotation(d3.axisTop, d3.scaleLinear, accessor.value, plot, plotMixin),
      svg = _svg(d3);

  return {
    adx: adx(accessor.adx, plot, plotMixin),
    aroon: aroon(accessor.aroon, plot, plotMixin),
    atr: line(accessor.value, plot, plotMixin),
    atrtrailingstop: atrtrailingstop(accessor.atrtrailingstop, plot, plotMixin),
    axisannotation: axisannotation,
    bollinger: bollinger(accessor.bollinger, plot, plotMixin),
    candlestick: candlestick,
    close: line(accessor.ohlc, plot, plotMixin),
    crosshair: crosshair(d3.select, d3_event, d3.mouse, d3.dispatch, accessor.crosshair, plot, plotMixin),
    ema: line(accessor.value, plot, plotMixin),
    heikinashi: candlestick,
    ichimoku: ichimoku(d3.area, d3.curveMonotoneX, accessor.ichimoku, plot, plotMixin),
    macd: macd(accessor.macd, plot, plotMixin),
    momentum: line(accessor.value, plot, plotMixin, true),
    moneyflow: line(accessor.value, plot, plotMixin, true),
    ohlc: ohlc(d3.scaleLinear, d3.extent, accessor.ohlc, plot, plotMixin),
    roc: line(accessor.value, plot, plotMixin, true),
    rsi: rsi(accessor.rsi, plot, plotMixin),
    sma: line(accessor.value, plot, plotMixin),
    sroc: line(accessor.value, plot, plotMixin, true),
    stochastic: stochastic(accessor.stochastic, plot, plotMixin),
    supstance: supstance(d3.drag, d3_event, d3.select, d3.dispatch, accessor.supstance, plot, plotMixin),
    tick: tick(d3.scaleLinear, d3.extent, accessor.tick, plot, plotMixin),
    tradearrow: tradearrow(d3.select, d3_functor, d3.mouse, d3.dispatch, accessor.trade, plot, plotMixin, svg.arrow),
    trendline: trendline(d3.drag, d3_event, d3.select, d3.dispatch, accessor.trendline, plot, plotMixin),
    volume: volume(accessor.volume, plot, plotMixin),
    vwap: line(accessor.value, plot, plotMixin),
    wilderma: line(accessor.value, plot, plotMixin),
    williams: williams(accessor.williams, plot, plotMixin)
  };
};

