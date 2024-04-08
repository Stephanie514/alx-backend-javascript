export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  /* vars are of the same value */
  if (trueOrFalse) {
    var task = false;
    var task2 = true;
  }
  /*vars */

  return [task, task2];
}
