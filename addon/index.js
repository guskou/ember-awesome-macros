export { default as add } from './add';
export { default as and } from './and';
export { default as any } from './any';
export { default as array } from './array';
export { default as camelize } from './camelize';
export { default as capitalize } from './capitalize';
export { default as classify } from './classify';
export { default as collect } from './collect';
export { default as compact } from './compact';
export { default as computed } from './computed';
export { default as conditional } from './conditional';
export { default as contains } from './contains';
export { default as dasherize } from './dasherize';
export { default as decamelize } from './decamelize';
export { default as defaultTrue } from './default-true';
export { default as difference } from './difference';
export { default as divide } from './divide';
export { default as eq } from './eq';
export { default as equal } from './equal';
export { default as every } from './every';
export { default as filterBy } from './filter-by';
export { default as filter } from './filter';
export { default as findBy } from './find-by';
export { default as find } from './find';
export { default as first } from './first';
export { default as getBy } from './get-by';
export { default as gt } from './gt';
export { default as gte } from './gte';
export { default as hash } from './hash';
export { default as htmlSafe } from './html-safe';
export { default as includes } from './includes';
export { default as indexOf } from './index-of';
export { default as instanceOf } from './instance-of';
export { default as isAny } from './is-any';
export { default as isEvery } from './is-every';
export { default as isHtmlSafe } from './is-html-safe';
export { default as join } from './join';
export { default as lastIndexOf } from './last-index-of';
export { default as last } from './last';
export { default as lt } from './lt';
export { default as lte } from './lte';
export { default as mapBy } from './map-by';
export { default as map } from './map';
export { default as math } from './math';
export { default as multiply } from './multiply';
export { default as not } from './not';
export { default as objectAt } from './object-at';
export { default as or } from './or';
export { default as parseFloat } from './parse-float';
export { default as parseInt } from './parse-int';
export { default as product } from './product';
import promise from './promise';
export { promise };
export { default as quotient } from './quotient';
export { default as raw } from './raw';
export { default as reduce } from './reduce';
export { default as slice } from './slice';
export { default as split } from './split';
export { default as substr } from './substr';
export { default as substring } from './substring';
export { default as subtract } from './subtract';
export { default as sum } from './sum';
export { default as tag } from './tag';
export { default as toLower } from './to-lower';
export { default as toUpper } from './to-upper';
export { default as typeOf } from './type-of';
export { default as underscore } from './underscore';
export { default as uniqBy } from './uniq-by';
export { default as uniq } from './uniq';
export { default as without } from './without';
export { default as writable } from './writable';

import { deprecateFunc } from 'ember-deprecations';

const projectName = 'ember-awesome-macros';
const until = 'sometime before 1.0';

function deprecate(newFunc, oldKey, newKey) {
  return deprecateFunc(`${oldKey} is deprecated, please use ${newKey}`, {
    id: `${projectName}.${oldKey}`,
    until
  }, newFunc);
}

const promiseAll = deprecate(promise.all, 'promiseAll', 'promise.all');
const promiseArray = deprecate(promise.array, 'promiseArray', 'promise.array');
const promiseHash = deprecate(promise.hash, 'promiseHash', 'promise.hash');
const promiseObject = deprecate(promise.object, 'promiseObject', 'promise.object');
const promiseResolve = deprecate(promise.resolve, 'promiseResolve', 'promise.resolve');

export {
  promiseAll,
  promiseArray,
  promiseHash,
  promiseObject,
  promiseResolve
};
