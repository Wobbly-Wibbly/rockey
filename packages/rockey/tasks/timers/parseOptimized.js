import { argv } from 'yargs';
import chalk from 'chalk';

import getCss from './utils/getCss';
import timer from './utils/timer';
import output from './utils/output';

import generateCss from '../../lib/css/generateCss';
import parseOptimized from '../../lib/css/parseOptimized';
import { stringifyRules } from '../../lib/styleSheets/StyleSheet';

const size = argv.size || 10;
const css = getCss(size);

console.log('');
console.log(
  `Start ${chalk.green('parseOptimized')} measuring with ${chalk.cyan(size)} class length`
);
console.log('');

timer(() => {
  stringifyRules(generateCss(parseOptimized(css)));
}).then(time => {
  output('parseOptimized', size, time);
});
