describe("Show note", function(){

  it('show a note', function(){
    testWindow = window.open('http://localhost:3000/');
    testWindow.onload = function() {
      testWindow.document.getElementById('noteName').value = "Test Note Name";
      testWindow.document.getElementById('noteContents').value = "this is over 20 characters";
      testWindow.document.getElementById('createNoteButton').click();
      html = testWindow.document;
      testWindow.close();
      expect(equal(html.getElementById("showNote").innerHTML, "Test Note Name"));
      expect(equal(html.getElementById("showNoteBody").innerHTML, "this is over 20 characters"));
    };
  });


});
