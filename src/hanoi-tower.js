import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
//throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 // return ((Math.pow(2, disksNumber) - 1), (Math.floor((Math.pow(2, disksNumber) - 1) * 3600 / turnsSpeed)))
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns * 3600 / turnsSpeed);
  return {turns, seconds};
}
//It can be shown that for a tower of n disks, there will be required 2n − 1 transfers of individual disks to shift the tower completely to another peg
