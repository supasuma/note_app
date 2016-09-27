
var notepad = new Notepad(Note);

function CreateNewNote() {
 notepad.createNote(document.getElementById('noteName').value, document.getElementById('noteContents').value);
 document.getElementById('noteName').value = "";
 document.getElementById('noteContents').value = "";
 makeUL(notepad.notes);

 document.getElementById('allNotes').appendChild(makeUL(notepad.preview()))

}

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < notepad.notes.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}
