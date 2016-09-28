describe("Adding Notes", function(){

  beforeEach(function(){
  });

  it('I can enter a note', function(){
    testWindow1 = window.open('http://localhost:3000/');
    testWindow1.onload = function() {
      testWindow1.document.getElementById('noteName').value = "Test Note Name";
      testWindow1.document.getElementById('noteContents').value = "1234567891012345678910";
      testWindow1.document.getElementById('createNoteButton').click();
      html = testWindow1.document.getElementById('allNotes').innerHTML;
      testWindow1.close();
      expect(contains(html, "12345678910123456789"));
    };
  });

  it('I only shows the first 20 characters of a note', function(){
    testWindow2 = window.open('http://localhost:3000/');
    testWindow2.onload = function() {
      testWindow2.document.getElementById('noteName').value = "Test Note Name";
      testWindow2.document.getElementById('noteContents').value = "this is over 20 characters";
      testWindow2.document.getElementById('createNoteButton').click();
      html = testWindow2.document.getElementById('allNotes').innerHTML;
      testWindow2.close();
      expect(notContains(html, "this is over 20 characters"));
    };
  });


  it('I can enter multiple note', function(){
    testWindow3 = window.open('http://localhost:3000/');
    testWindow3.onload = function() {
      testWindow3.document.getElementById('noteName').value = "Makers Academy Week 6";
      testWindow3.document.getElementById('noteContents').value = "Testing frameworks are such a joy";
      testWindow3.document.getElementById('createNoteButton').click();
      testWindow3.document.getElementById('noteName').value = "Makers Academy Week 13";
      testWindow3.document.getElementById('noteContents').value = "Arrgh i'm unemployed!!!!!";
      testWindow3.document.getElementById('createNoteButton').click();
      html = testWindow3.document.getElementById('allNotes').innerHTML;
      testWindow3.close();
      expect(contains(html, "Testing frameworks a"));
      expect(contains(html, "Arrgh i'm unemployed"));
    };
  });

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
