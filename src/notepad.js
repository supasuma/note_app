
function Notepad(Noteclass) {
  this.noteclass = Noteclass;
  this.notes = [];
}

Notepad.prototype.createNote = function (title, content) {
  var note = new this.noteclass(title, content);
  this.notes.push(note);
};

Notepad.prototype.preview = function () {
  return this.notes.map(function(note){return note.preview();});
};
