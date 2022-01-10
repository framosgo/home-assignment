import { IP_MAX_TIMES } from '../constants';
import { Counter } from '../utils/counter';

export const applyAlgorithm = (clicks = []) => {
  const { add, isValid, remove } = new Counter(IP_MAX_TIMES);

  return clicks
    // Formats timestamp in order to be used as Date instead.
    .map((click) => ({...click, timestamp: new Date(click.timestamp)}))
    // Sorts to take the earlier click first. Requirement 2.
    .sort((a, b) => a.timestamp - b.timestamp)
    .reduce((subset, currentClick) => {
      const currentPeriod = currentClick.timestamp.getHours();
      const lastPosition = subset.length -1;
      const lastClick = subset[lastPosition];

      if (!isValid(currentClick.ip)) {
        return subset;    
      }

      const lastPeriod = lastClick && lastClick.timestamp.getHours();
      if (currentPeriod !== lastPeriod) {
        subset.push(currentClick);
        add(currentClick.ip);
        // Choose the most expensive one. Requirement 1
      } else if (currentClick.amount > lastClick.amount) {
        subset.splice(lastPosition, 1, currentClick);
        add(currentClick.ip);
        remove(lastClick.ip);
      }

      return subset;
    }, [])
    // Formats timestamp to its original format
    .map((click) => ({...click, timestamp: click.timestamp.toLocaleString().replace(/,/g, '') }))
}