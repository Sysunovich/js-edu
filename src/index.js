/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

var basicProgramming = 1300; // недель часов для начинающего с ноля
var masterProgramming = 800;
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
  if (knowsProgramming) {
    return Math.ceil(masterProgramming / config[focus]);
  } else {
    return Math.ceil(basicProgramming / config[focus]);
  }
}










// module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
//       if (defaultStudentSpeedConfig.normal_life) {
//         return masterLevel / defaultStudentSpeedConfig.normal_life;
//   } if (defaultStudentSpeedConfig.family) {
//     return masterLevel / defaultStudentSpeedConfig.family;
//   }
//   return;
// }