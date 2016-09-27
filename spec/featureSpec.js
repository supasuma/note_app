describe("Feature Test", function(){

  beforeEach(function(){

    window.addEventListener("message", function(event) {
      console.log(event.data)
    }, false );

    var testWindow = window.open('./views/index.html')
    setTimeout(function() {
      testWindow.postMessage('body' , "*")
     }, 1000)
    });

  it('should open a test window', function(){
  });

});
