describe("Note", function(){

  beforeEach(function(){
    note = new Note("testicles", "testing to the maxicles");
    return "done!";
  });

  it("should have a title", function(){
    expect(equal(note.title, "testicles"));
  });

  it("should have content", function() {
    expect(equal(note.content, "testing to the maxicles"));
  });

  it("should preview first 20 characters", function() {
    expect(equal(note.preview(), "testing to the maxic"));
  });


});
