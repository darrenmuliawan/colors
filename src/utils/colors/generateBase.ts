import { BASE_COLOR } from 'constants';
import { randomNumber } from 'utils/randomNumber';

export const generateBase = () => {
  const all = Object.keys(BASE_COLOR);
  const random_index = randomNumber(0, all.length - 1);
  return all[random_index];
};
