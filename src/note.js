function Note(title, content) {
  this.title = title;
  this.content = content;
}

Note.prototype.preview = function () {
  return this.content.slice(0,20);
};
