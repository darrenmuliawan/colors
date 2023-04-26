import { randomNumber } from 'utils/randomNumber';

export const generateBase = () => {
  const reds = ['#DC143C', '#B22222', '#CD5C5C', '#FF7F50', '#FF6347'];
  const blues = ['#4169E1', '#1E90FF', '#4682B4', '#87CEEB', '#6495ED'];
  const greens = ['#228B22', '#32CD32', '#6B8E23', '#2E8B57', '#66CDAA'];
  const yellows = ['#FFD700', '#F0E68C', '#FFFFE0', '#FFFACD', '#FFE4B5'];
  const oranges = ['#FF8C00', '#FF7F50', '#A0522D', '#F4A460', '#CD853F'];
  const purples = ['#4B0082', '#9370DB', '#DA70D6', '#BA55D3', '#DDA0DD'];
  const pinks = ['#FF1493', '#FF69B4', '#DB7093', '#FFC0CB', '#FFB6C1'];
  const browns = ['#8B4513', '#A0522D', '#CD853F', '#DEB887', '#BC8F8F'];
  const blacks = ['#696969', '#808080', '#A9A9A9', '#C0C0C0', '#D3D3D3'];
  const whites = ['#FFFFF0', '#FFFAF0', '#F8F8FF', '#F5F5F5', '#FFF5EE'];
  const pantones = [
    '#98B2D1', // 2000 - Cerulean Blue (Pantone 15-4020)
    '#C74375', // 2001
    '#BF1932', // 2002
    '#7BC4C4', // 2003
    '#E2583E', // 2004
    '#53B0AE', // 2005
    '#DECDBE', // 2006
    '#9B1B30', // 2007
    '#5A5B9F', // 2008
    '#F0C05A', // 2009
    '#45B5AA', // 2010
    '#D94F70', // 2011
    '#DD4124', // 2012
    '#009473', // 2013
    '#B163A3', // 2014
    '#955251', // 2015
    '#F7CAC9', // 2016
    '#92A8D1', // 2016
    '#88B04B', // 2017
    '#5F4B8B', // 2018
    '#FF6F61', // 2019
    '#0F4C81', // 2020
    '#F5DF4D', // 2021
    '#939597', // 2021
    '#6667AB', // 2022
    '#BB2649', // 2023
  ];
  const all = pantones.concat(
    reds,
    blues,
    greens,
    yellows,
    oranges,
    purples,
    pinks,
    browns,
    blacks,
    whites
  );

  return all[randomNumber(0, all.length)];
};
