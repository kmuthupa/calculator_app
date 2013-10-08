var Calculator = function(){
  var Constructor = function(){
    this.lastValues = [];
    this.saveValues = function(value1, value2) {
      this.lastValues.push(value1);
      this.lastValues.push(value2);
    };
  };

  Constructor.prototype = {
    add: function(value1, value2) {
      this.saveValues(value1, value2);
      return value1 + value2;
    },
    subtract: function(value1, value2) {
      this.saveValues(value1, value2);
      return value1 - value2;
    },
    multiply: function(value1, value2) {
      this.saveValues(value1, value2);
      return value1 * value2;
    },
    clear: function() {
      this.lastValues.pop();
      this.lastValues.pop();
    },
  };

  return Constructor;
}();
