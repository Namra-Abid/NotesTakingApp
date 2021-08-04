console.log('Notes App');
showNotes();
// To add notes to local storage
let addBtn = document.getElementById('addbtn');
addBtn.addEventListener("click", function () {
    let textarea = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);

    }
    notesArray.push(textarea.value);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    textarea.value = "";
    console.log(notesArray);
    showNotes();
});
// To show notes
function showNotes() {
    console.log('sHow Notes');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);

    }
    console.log('sHow Notes2');
    let html = "";
    console.log('sHow Notes3');
    notesArray.forEach(function (element, index) {
        html += `<div class="my-2 mx-2 card" style="width: 18rem;"><div class="card-body">
          <h5 class="card-title">Note ${index +1}</h5>
          <p class="card-text">${element}</p>
          <a id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a>
        </div>
      </div>`;
    });
      console.log('sHow Notes4');
        let notesElem = document.getElementById('notes');
        if (notesArray.length != 0) {
            notesElem.innerHTML = html;
        }
        else {
            // console.log('NAMRA');
            notesElem.innerText = " Click the “Add Note” button above to take notes , You currently have no notes.!";
            console.log(notesElem.innerHTML);
        }

}
//function to delete a note
function deleteNote(index){
    console.log('Delete this note' + ' ' + String(index));

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArray = [];
    }
    else {
        notesArray = JSON.parse(notes);

    }

    notesArray.splice(index,1);

    // update local storage
    
    localStorage.setItem("notes", JSON.stringify(notesArray));
    showNotes();
}