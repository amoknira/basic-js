import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let constantK = 0.693/HALF_LIFE_PERIOD; // the half-life of a first-order reaction:t_0.5 = 0.693/k

  if (typeof(sampleActivity) !== 'string' || sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY || isNaN(sampleActivity)) {
    return false;
  }
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / constantK); //as values of MODERN_ACTIVITY and sampleActivity are natural logarithms  N0/(N*k)
}
