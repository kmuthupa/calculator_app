describe("The landing page", function(){
  it("should display the greeting message when the page loads", function(){
    init();
    $greetingSpan = $("#greeting");
    expect($greetingSpan).toHaveText("Hi. Hello!");
  });
});
