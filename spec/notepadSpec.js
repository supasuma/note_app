describe("Notepad", function(){

  beforeEach(function(){
    notepad = new Notepad(NoteStub);
    notepad.createNote("testicles", "testing to the maxiclesness");
    notepad.createNote("testies", "testing to the maxiclesness");
  });

  it("can create new note", function(){
    expect(equal(notepad.notes.pop(), new NoteStub()));
  });

  it("shows preview of all notes", function(){
    expect(equal(notepad.preview(), ["testing to the maxic", "testing to the maxic"]));
  });
});
