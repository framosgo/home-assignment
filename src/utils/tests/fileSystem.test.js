import assert from 'assert';
import { Counter } from '../counter';
import { readProblem } from '../fileSystem';

describe("FileSystem", () => {
  describe("readProblem", () => {
    it("should return an empty array if the file is not found ", async () => {
      const problem = await readProblem();
      assert.deepStrictEqual(problem, []);
    });
  });
});