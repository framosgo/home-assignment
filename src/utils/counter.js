// Counter how many IP are being added. Requirement 3.
export class Counter {
  constructor(maxTimes = Infinity) {
    this.dictionary = {};
    this.maxTimes = maxTimes;
  }

  getTimes = (element) => (this.dictionary[element] || 0);

  isValid = (element) => this.getTimes(element) < this.maxTimes;

  add = (element) => {
    this.dictionary[element] = this.getTimes(element) + 1;
  }

  remove = (element) => {
    this.dictionary[element] = this.getTimes(element) - 1;
  }
}