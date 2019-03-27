function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function roundAvg(arr) {
  return Math.round(arr.reduce((total, i) => total + i) / arr.length);
}

function generateRandomList(count, min, max) {
  if (count < 1) throw new Error("count must be > 0");
  if (min < 1 || max < 1) throw new Error("min and max must be > 0");
  if (min > max) throw new Error("max must be > min");
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(getRandomIntInclusive(min, max));
  }
  return list;
}

export function generateTargetList(count, target, min, max) {
  let i = 0;
  do {
    const list = generateRandomList(count, min, max);
    const avg = roundAvg(list);
    if (avg === target) {
      console.debug(`Took ${i + 1} tries to generate.`);
      return list;
    }
    i++;
  } while (i < 10000);
  console.error(
    `Couldn't generate target list after ${i} attempts. Returning random list.`
  );
  return generateRandomList(count, min, max);
}
