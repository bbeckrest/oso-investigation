// eslint-disable-next-line import/prefer-default-export
export function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}
