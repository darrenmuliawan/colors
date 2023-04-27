import { blues, browns, greens, oranges, pantones, pinks, purples, reds, yellows } from 'constants';
import { randomNumber } from 'utils/randomNumber';

export const generateBase = () => {
  const all = pantones.concat(
    reds,
    blues,
    greens,
    yellows,
    oranges,
    purples,
    pinks,
    browns
    // blacks,
    // whites
  );
  const random_index = randomNumber(0, all.length - 1);
  return all[random_index];
};
