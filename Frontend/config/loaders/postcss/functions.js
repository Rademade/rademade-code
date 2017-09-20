let $browserContext = 16;

module.exports = {
  functions: {
    ls: function ($ls) {
      var $ls = $ls / 1000;
      return $ls + 'em';
    },
    lh: function ($lineHeight, $fontSize) {
      var $lh = $lineHeight / $fontSize;
      return $lh;
    },
    rem: function ($pixels) {
      var $rem = $pixels / $browserContext;
      return $rem + 'rem';
    },
    columns: function ($columnCount) {
      var $columnCountWidth = 100 / $columnCount;
      return $columnCountWidth + '%';
    }
  }
};