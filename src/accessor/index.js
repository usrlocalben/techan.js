

import  { atrtrailingstop } from './atrtrailingstop.js';
import  { crosshair } from './crosshair.js';
import  { ichimoku } from './ichimoku.js';
import  { macd } from './macd.js';
import  { ohlc } from './ohlc.js';
import  { rsi } from './rsi.js';
import  { trendline } from './trendline.js';
import  { value } from './value.js';
import  { volume } from './volume.js';
import  { tick } from './tick.js';
import  { trade } from './trade.js';
import  { adx } from './adx.js';
import  { aroon } from './aroon.js';
import  { stochastic } from './stochastic.js';
import  { supstance } from './supstance.js';
import  { williams } from './williams.js';
import  { bollinger } from './bollinger.js';


// Provide IDs for all accessors. Default to date, but at least provide an option
export const accessors = ()=>({
    atrtrailingstop: atrtrailingstop,
    crosshair: crosshair,
    ichimoku: ichimoku,
    macd: macd,
    ohlc: ohlc,
    rsi: rsi,
    trendline: trendline,
    value: value,
    volume: volume,
    tick: tick,
    trade: trade,
    adx: adx,
    aroon: aroon,
    stochastic: stochastic,
    supstance: supstance,
    williams: williams,
    bollinger: bollinger
  });
