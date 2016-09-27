describe("Notepad", function(){

  beforeEach(function(){
    testWindow = window.open('http://localhost:3000/');
    while (testWindow.document === undefined) {
      return "hold";
    }
      html = testWindow.document;
      console.log(1);
      console.log(html);
      testWindow.close();
    });


  it('should open a browser window', function(){
    console.log(2);
    console.log(html);
  });

});
