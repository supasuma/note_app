describe("Note", function(){

  var body = "";

  beforeEach(function(){
    testWindow = window.open('http://localhost:3000');
    testWindow.onload = function () {
      body = index.document;
      index.close();
    };
    return "done!";
  });

  it("should have a title", function(){
    console.log(body);
    // expect(equal(bodynote.title, "testicles"));
  });

});
