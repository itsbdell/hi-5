const nameNote = document.getElementById("note");
const nameSave = document.getElementById("save");

let note = localStorage["note"];
if (note == null) {
   note = "";
}
nameNote.value = note; 

nameSave.onclick = () => {
    localStorage["note"] = nameNote.value;
}