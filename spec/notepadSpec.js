describe("Notepad", function(){

  beforeEach(function(){
    notepad = new Notepad(Note);
    notepad.createNote("testicles", "testing to the maxicles");
    notepad.createNote("testies", "testing to the maxies");
  });

  it("can create new note", function(){
    expect(equal(notepad.notes.length, 2));
  });

  it("shows preview of all notes", function(){
    expect(equal(notepad.preview(), ["testing to the maxic", "testing to the maxie"]));
  });


});
