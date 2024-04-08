export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  /* disable no-unused-vars-eslint */
  if (trueOrFalse) {
    task = false;
    task2 = true;
  }
  /* enable no-unused-vars-eslint */

  return [task, task2];
}
