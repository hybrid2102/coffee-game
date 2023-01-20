// min and max included
function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// min and max excluded
export function useRandom(minExcluded: number, maxExcluded: number): number {
  return randomIntFromInterval(minExcluded + 1, maxExcluded - 1);
}
