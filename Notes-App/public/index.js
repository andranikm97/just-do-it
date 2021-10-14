// Add jquery
// setup a listener for the button
// link button click to fetching the value of the text box
// design a functional component that will be the note
// inject notes into the notes container
// add date and title to note

let addButton = $('#add-button');
let inputContent = $('#note-input');
let notes = $('#notes');

addButton.click(() => {
  if (inputContent.val()) {
    notes.prepend(makeNote(inputContent.val()));
  }

  inputContent.val('');
});

function makeNote(text) {
  let date = new Date();
  date =
    String(date.getDay()).padStart(2, '0') +
    '.' +
    String(date.getMonth()).padStart(2, '0');
  console.log(date);
  let note = `<div class="note">
  <p class = "note-text">${text}</p>
  <span class = "note-date">${date}</span>
  </div>`;
  return note;
}
