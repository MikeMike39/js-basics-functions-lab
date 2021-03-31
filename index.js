// Calculate distance in "blocks" from hq below 42nd street returns distance in "blocks"

function distanceFromHqInBlocks(Blocks) {
  return Math.abs(42 - Blocks);
}

// Calculate distance in "Feet" from hq below 42nd street returns distance in "feet"

function distanceFromHqInFeet(feet) {
  return Math.abs((42 - feet) * 264);
}

// Calculate distance in "Feet" from hq below 42nd street returns "feet Distance" returns a value if "destination is below distance"

function distanceTravelledInFeet(Begin, Finish) {
  return Math.abs((Begin - Finish) * 264);
}

// gives customers a free sample charges 2 cents per foot when total feet travelled is between 400 and 2000  does not allow rides over 2500 feet charges 25 dollars for a distance over 2000 feet

function calculatesFarePrice(start, destination) {
  const distance = Math.abs((start - destination) * 264);
  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 2500:
      return "cannot travel that far";
    case distance > 2000:
      return 25;
    case distance > 400:
      return 0.02 * (distance - 400);
  }
}
