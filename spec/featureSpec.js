describe("Notepad", function(){

  beforeEach(function(){
    var html = '';
    testWindow = window.open('http://localhost:3000/');
    if (testWindow.document === undefined) {
      return "hold";
    } else {
      testWindow.onload = function() {
      html = testWindow.document;
      console.log(1);
      console.log(html);
      testWindow.close();
      return "done";
    };
    }
  });


  it('should open a browser window', function(){
    console.log(2);
    console.log(html);
  });

});
