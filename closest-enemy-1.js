function closestEnemy(arr) {
  const indexOfOne = arr.indexOf(1);
  let minDistance = Infinity;

  if (indexOfOne === -1) return 0;
  if (arr.indexOf(2) === -1) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      const distance = Math.abs(indexOfOne - i);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }
  return minDistance;
}

console.log(closestEnemy([2, 0, 0, 1, 0, 0, 2]));
