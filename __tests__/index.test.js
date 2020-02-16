import flatten from '../src/index.js';

test('flattenDeep', () => {
  expect(flatten([1, ['string', [null, [4, [undefined, [6]]]]]], Infinity)).toEqual([1, "string", null, 4, undefined, 6]);
});

test('flattenWithoutArg', () => {
  expect(flatten([1, ['string', [null, [4, [undefined, [6]]]]]])).toEqual([1, 'string', [null, [4, [undefined, [6]]]]]);
});

test('flatten3', () => {
  expect(flatten([1, ['string', [null, [4, [undefined, [6]]]]]], 3)).toEqual([1, 'string', null, 4, [undefined, [6]]]);
});
