import { applyAlgorithm } from './algorithm';
import { INPUT_FILE_NAME, OUTPUT_FILE_NAME } from './constants';
import { readProblem, writeSolution } from './utils/fileSystem';

const main = async () => {
  const clicks = await readProblem(INPUT_FILE_NAME);
  const clickSubset = applyAlgorithm(clicks);
  await writeSolution(clickSubset, OUTPUT_FILE_NAME);
}

main();