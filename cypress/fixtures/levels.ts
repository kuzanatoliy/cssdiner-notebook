export const levels = [
  ['plate'],
  ['bento'],
  ['#fancy'],
  ['plate apple'],
  ['plate#fancy pickle'],
  ['apple.small'],
  ['orange.small'],
  ['bento orange.small'],
  ['plate, bento'],
  ['*'],
  ['orange, pickle, apple:not(.small)'],
  ['plate + apple'],
  ['bento ~ pickle'],
  ['plate > apple'],
  ['orange:first-child'],
  ['plate :only-child'],
  ['#fancy :last-child, pickle'],
  [':nth-child(3)'],
  ['bento:nth-last-child(3)'],
  ['apple:first-of-type'],
  [':nth-of-type(even)'],
  [':nth-of-type(2n + 3)'],
  ['apple:only-of-type'],
  [':not(pickle):last-of-type'],
  ['bento:empty'],
  ['apple:not(.small)'],
  ['[for]'],
  ['[for="Sarah"], [for="Luke"]'],
  ['[for="Vitaly"]'],
  ['[for^="Sa"]'],
  ['[for$="ato"]'],
  ['[for*="obb"]'],
];
