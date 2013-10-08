describe("Calculator", function(){
  var calculator;

  beforeEach(function() {
    calculator =  new Calculator();
  });

  it("stores nothing initially", function(){
    var lastValues = calculator.lastValues;
    expect(lastValues).toEqual([]);
  });
  
  it("adds two numbers", function(){
    var sum = calculator.add(1, 5);
    expect(sum).toEqual(6);
  });
  
  it("subtracts two numbers", function(){
    var difference = calculator.subtract(6, 5);
    expect(difference).toEqual(1);
  });
  
  it("multiplies two numbers", function(){
    var product = calculator.multiply(6, 5);
    expect(product).toEqual(30);
  });

  it("saves numbers passed in", function(){
    calculator.add(6, 7);
    var lastValues = calculator.lastValues;
    expect(lastValues).toContain(6);
    expect(lastValues).toContain(7);
  });
  
  it("clears the numbers", function(){
    calculator.add(6, 7);
    expect(calculator.lastValues).toEqual([6, 7]);
    calculator.clear();
    expect(calculator.lastValues).toEqual([]);
  });
});
