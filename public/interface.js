
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
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < notepad.notes.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        // document.createElement('a');
        // Set its contents:
        var link = item.appendChild(document.createElement('a'));
        link.setAttribute("href", i);
        link.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function showHide(){
      var showNote = document.getElementById('showOneNote');
      showNote.onclick = function(){
        showNote.style.display = "none";
      };
}
