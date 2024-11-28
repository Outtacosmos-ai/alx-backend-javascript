// utils.js

export const Utils = {
    calculateNumber: function (type, a, b) {
      if (type === 'SUM') {
        return Math.round(a + b);
      }
      if (type === 'SUBTRACT') {
        return Math.round(a - b);
      }
      if (type === 'DIVIDE') {
        if (b === 0) {
          return 'Error';
        }
        return Math.round(a / b);
      }
      throw new Error('Invalid type');
    },
  };
  