import FCC from './FCC.jsx'
import defaultTheme from './defaultTheme.js';
import defaultConfig from './defaultConfig.js';
import * as utils from './utils';

FCC.utils = utils;
FCC.setTheme(defaultTheme);
FCC.setConfig(defaultConfig);

if(FCC.config.addToWindow) window.FCC = FCC;

export default FCC;