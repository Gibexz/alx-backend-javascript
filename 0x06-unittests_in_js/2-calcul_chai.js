function calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return (Math.round(a) + Math.round(b));
    }
    if (type === 'SUBTRACT') {
      return (Math.round(a) - Math.round(b));
    }
    if (type === 'DIVIDE') {
      if (b !== 0) {
        const ans = (Math.round(a) / Math.round(b));
        if (ans === Infinity || ans === -Infinity) { return 'Error'; }
        return ans;
      }
      return ('Error');
    }
    return 0;
  }
  
  module.exports = calculateNumber;
  