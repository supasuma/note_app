describe("Show note", function(){

  it('show a note', function(){
    testWindow = window.open('http://localhost:3000/');
    testWindow.onload = function() {
      testWindow.document.getElementById('noteName').value = "Test Note Name";
      testWindow.document.getElementById('noteContents').value = "this is over 20 characters";
      testWindow.document.getElementById('createNoteButton').click();
      testWindow.document.getElementById('0').click();

      html = testWindow.document;
      testWindow.close();
      expect(contains(html.getElementById("showOneNote").innerHTML, "Test Note Name"));
      expect(contains(html.getElementById("showNoteBody").innerHTML, "this is over 20 characters"));
    };
  });


});
