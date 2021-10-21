// eslint-disable-next-line import/prefer-default-export
export function createColumnMappers(columnToProp) {
  const propToColumn = Object.keys(columnToProp).reduce((propToCol, column) => {
    // eslint-disable-next-line no-param-reassign
    propToCol[columnToProp[column]] = column;
    return propToCol;
  }, {});

  return {
    parse(obj) {
      return Object.keys(obj).reduce((mapped, column) => {
        // eslint-disable-next-line no-param-reassign
        mapped[columnToProp[column] || column] = obj[column];
        return mapped;
      }, {});
    },

    format(obj) {
      return Object.keys(obj).reduce((mapped, prop) => {
        // eslint-disable-next-line no-param-reassign
        mapped[propToColumn[prop] || prop] = obj[prop];
        return mapped;
      }, {});
    },
  };
}
