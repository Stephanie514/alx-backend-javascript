export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    /* Removed var declarations */
    task = false;
    task2 = true;
  }

  return [task, task2];
}
