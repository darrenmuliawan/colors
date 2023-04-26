import { twMerge } from 'tailwind-merge';

export const classNames = (...classes: string[]) => {
  return twMerge(classes.filter(Boolean).join(' '));
};
