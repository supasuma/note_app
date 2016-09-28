
var notepad = new Notepad(Note);

function CreateNewNote() {
 notepad.createNote(document.getElementById('noteName').value, document.getElementById('noteContents').value);
 document.getElementById('noteName').value = "";
 document.getElementById('noteContents').value = "";
 updateList();
 }

 function updateList(){
   document.getElementById('allNotes').innerHTML = "";
   document.getElementById('allNotes').appendChild(makeUL(notepad.preview()));

   }


function makeUL(array) {
    var list = document.createElement('ul');

    for(var i = 0; i < notepad.notes.length; i++) {
        var item = document.createElement('li');
        var link = item.appendChild(document.createElement('a'));
        link.setAttribute("id", i);
        link.setAttribute("href", '#showOneNote');
        link.appendChild(document.createTextNode(array[i]));
        link.addEventListener("click", showHide);
        list.appendChild(item);
    }
    return list;
}

function showHide(event){
      var showNote = document.getElementById('showOneNote');
        showNote.innerHTML = '<h1 id="showNote">show note</h1>';
        showNote.style.display = "inline";
        var note = notepad.notes[event.target.id];
        var title = document.createElement('h3');
        title.appendChild(document.createTextNode(note.title));
        showNote.appendChild(title);
        var content = document.createElement('p');
        content.appendChild(document.createTextNode(note.content));
        showNote.appendChild(content);
}
