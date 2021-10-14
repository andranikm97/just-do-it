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

  // inputContent.val('');
});

function makeNote(text) {
  let note = `<div class="note">
  <p>${text}</p>
  </div>`;
  return note;
}
