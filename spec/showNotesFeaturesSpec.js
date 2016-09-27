describe("Show notes", function(){

  var body = "";

  beforeEach(function(){
    index = window.open('file:///Users/Jon/projects/senior/noteAppJS/views/index.html');
    index.onload = function(){
      body = document;
      console.log(index);
    index.close();
    };
  });

  it("Should have a title", function(){
    console.log(body);
    expect(equal(body.getElementById('header'), "Our Single-Page-Pure-JS Amazing Notes App"));
  });

    // note = new Note("testicles", "testing to the maxicles");
    // note = new Note("test2", "note number 2 for the purpose of testing.");
    // body = document;
    // console.log(body);
  });

// expect(equal(note.preview(), "testing to the maxic"));
