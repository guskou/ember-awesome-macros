import { compare } from '@ember/utils';
import { get } from '@ember/object';
import { normalizeArray } from './-utils';

export default function(array, sortDefinition) {
  let computedCallback;

  if (sortDefinition === undefined) {
    computedCallback = array => array.slice().sort();
  } else {
    computedCallback = function(array, sortDefinition) {
      let sortCallback;

      if (typeof sortDefinition === 'function') {
        sortCallback = sortDefinition.bind(this);
      } else {
        sortCallback = (a, b) => {
          let result = 0;

          // https://kangax.github.io/compat-table/es6/#test-generators
          // for (let key of sortDefinition) {
          for (let i = 0; i < sortDefinition.length; i++) {
            let key = sortDefinition[i];
            let [prop, direction] = key.split(':');
            result = compare(get(a, prop), get(b, prop));
            if (result !== 0) {
              if (direction === 'desc') {
                result *= -1;
              }

              break;
            }
          }

          return result;
        };
      }

      return array.slice().sort(sortCallback);
    };
  }

  return normalizeArray({}, computedCallback)(array, sortDefinition);
}
